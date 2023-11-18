<script lang="ts">
  import "../app.css";
  import {
   GoogleAuthProvider,
   signInWithPopup
  } from 'firebase/auth';
  import { onMount } from 'svelte';
  import { session } from '$lib/session';
  import { signOut } from 'firebase/auth';
  import { auth } from '$lib/firebase.client';
  import { db } from '$lib/firebase.client';
  import { doc, getDoc, setDoc } from 'firebase/firestore';

  import type { LayoutData } from './$types';

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, Button } from 'flowbite-svelte';

  import DropStore from '../store';

  import chest from '$lib/assets/Icon_Blue_Chest.png'

  export let data: LayoutData;
 
  let loading: boolean = true;
  let loggedIn: boolean = false;
 
  session.subscribe((cur: any) => {
   loading = cur?.loading;
   loggedIn = cur?.loggedIn;
  });
 
  onMount(async () => {   
   const user: any = await data.getAuthUser();
 
   const loggedIn = !!user && user?.emailVerified;
   session.update((cur: any) => {
    loading = false;
    return {
     ...cur,
     user,
     loggedIn,
     loading: false
    };
   });

   if (loggedIn) {
    await getUserData()
   }

  });

  async function getUserData() {
    if ($session.user?.uid) {
      let q = doc(db, "drops", $session.user?.uid);
      const docSnap = await getDoc(q)
      const obj = docSnap.data()

      if (obj) {
        for (const [raid_tier, obj1] of Object.entries(obj)) {
          for (const [raid_name, obj2] of Object.entries(obj1)) {
            for (const [chest_name, obj3] of Object.entries(obj2)) {
              for (const [item_name, val] of Object.entries(obj3)) {
                $DropStore[raid_tier][raid_name][chest_name][item_name] = val
              }
            }
          }
        }
      }
    }
  }

  async function resetData() {
    for (const [raid_tier, obj1] of Object.entries($DropStore)) {
      for (const [raid_name, obj2] of Object.entries(obj1)) {
        for (const [chest_name, obj3] of Object.entries(obj2)) {
          for (const [item_name, val] of Object.entries(obj3)) {
            $DropStore[raid_tier][raid_name][chest_name][item_name] = 0
          }
        }
      }
    }
  }
    
  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
    .then((result) => {
      const { displayName, email, photoURL, uid } = result?.user;
      session.set({
      loggedIn: true,
      user: {
        displayName,
        email,
        photoURL,
        uid
      }
      })
    })
    .catch((error) => {
      return error;
    });
    await getUserData();
  }

  async function logOut() {
    await signOut(auth)
    .then(() => {
    session.set({
     loggedIn: false,
     user: null
    });
    })
    .catch((error) => {
    return error;
    });
    await resetData()
  }

  async function syncData() {
    if ($session.user?.uid) {
      let q = doc(db, "drops", $session.user?.uid);
      await setDoc(q, $DropStore);
    }
  }
 </script>

{#if loading}
  <div>Loading...</div>
  {:else}
    <div class="relative px-8">
      <Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b">
        <NavBrand href="/">
          <img src={chest} class="mr-3 h-6 sm:h-9" alt="Blue Chest" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Granblue Fantasy Chest Tracker</span>
        </NavBrand>
        {#if loggedIn}
          <div class="flex items-center gap-2 md:order-2 hover:cursor-pointer">
            <Button pill={true} outline={true} class="!p-2" size="lg" on:click={syncData}>
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
              </svg>
            </Button>
            <p>Last sync:</p>
          </div>
          <div class="flex items-center gap-4 md:order-2 hover:cursor-pointer">
            <Avatar id="avatar-menu" src={$session.user?.photoURL} />
            <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
          </div>
          <Dropdown placement="bottom" triggeredBy="#avatar-menu">
            <DropdownHeader>
              <span class="block text-sm">{$session.user?.displayName}</span>
              <span class="block truncate text-sm font-medium">{$session.user?.email}</span>
            </DropdownHeader>
            <DropdownItem on:click={logOut}>Sign out</DropdownItem>
          </Dropdown>
        {:else}
        <div class="flex items-center md:order-2">
          <button on:click={loginWithGoogle}>Login with Google</button>
        </div>
        {/if}
        <!--<NavUl>
          <NavLi href="/" active={true}>Home</NavLi>
          <NavLi href="/">Statistics</NavLi>
        </NavUl>-->
      </Navbar>
    </div>
{/if}

<slot />