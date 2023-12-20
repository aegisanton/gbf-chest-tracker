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
  import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';

  import DropStore from '../DropStore';
  import RateStore from "../RateStore";
  import SyncStore from "../SyncStore";

  import chest from '$lib/assets/Icon_Blue_Chest.png'

  export let data: LayoutData;
 
  let loading: boolean = true;
  let loggedIn: boolean = false;

  let syncing = false
 
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
       
   const interval = setInterval(syncData, 600000); // 10 minutes

  return () => clearInterval(interval)

  });

  async function getUserData() {
    if ($session.user?.uid) {
      let q = doc(db, "drops", $session.user?.uid);
      const docSnap = await getDoc(q)
      .then((res) => {
        const obj = res.data()
        if (obj) {
          for (const [raid_tier, obj1] of Object.entries(obj.drops)) {
            for (const [raid_name, obj2] of Object.entries(obj1)) {
              for (const [chest_name, obj3] of Object.entries(obj2)) {
                for (const [item_name, val] of Object.entries(obj3)) {
                    if (typeof $DropStore[raid_tier][raid_name][chest_name][item_name] == 'number') {
                      $DropStore[raid_tier][raid_name][chest_name][item_name] = val
                    }
                }
              }
            }
          }
        }   
        $SyncStore.last_sync = new Date(obj.last_sync.seconds*1000).toLocaleString()    
      })
      .catch((error) => {
        return error
      })
    }
  }

  function resetData() {
    for (const [raid_tier, obj1] of Object.entries($DropStore)) {
      for (const [raid_name, obj2] of Object.entries(obj1)) {
        for (const [chest_name, obj3] of Object.entries(obj2)) {
          for (const [item_name, val] of Object.entries(obj3)) {
            $DropStore[raid_tier][raid_name][chest_name][item_name] = 0
          }
        }
      }
    }
  $SyncStore.last_sync = null
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
    resetData()
  }

  async function syncData() {
    syncing = true
    if ($session.user?.uid) {
      let q = doc(db, "drops", $session.user?.uid);
      const timestamp = new Date()
      const data =  {"last_sync": timestamp, "drops": $DropStore}
      await setDoc(q, data)
      .then(() => {
        $SyncStore.last_sync = timestamp
      })
      .catch((error) => {
        syncing = false
        return error;
      });
    }
    syncing = false
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
          <div class="flex items-center gap-2 md:order-2">
            <Button pill={true} class="!p-2 focus:ring-0 hover:cursor-pointer" size="lg" on:click={syncData}>
              {#if syncing}
                <svg class="animate-spin w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                </svg>
              {:else}
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                </svg>
              {/if}
            </Button>
            <p class="text-sm"><i>Last sync: {($SyncStore.last_sync ? $SyncStore.last_sync.toLocaleString() : "N/A")}</i></p>
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
          <Button class="focus:ring-0" on:click={loginWithGoogle}>
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 18 19">
              <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
            </svg> <p class="ml-2">Google Login</p>
          </Button>
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

<!--<Footer>
  <FooterCopyright href="/" by="Anton Chen" year={2022} />
</Footer>-->