<script lang="ts">
  import "../app.css";
  import {
   GoogleAuthProvider,
   signInWithPopup
  } from 'firebase/auth';
  import { onMount } from 'svelte';
  import { session } from '$lib/session';
  import { invalidateAll } from '$app/navigation';
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
    let q = doc(db, "drops", "example");
    const docSnap = await getDoc(q)
   }

  });

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
      });
    })
    .catch((error) => {
      return error;
    });
  }

  function logOut() {
    signOut(auth)
    .then(() => {
    session.set({
     loggedIn: false,
     user: null
    });
    invalidateAll();
    })
    .catch((error) => {
    return error;
    });
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
            <Avatar id="avatar-menu" src={$session.user?.photoURL} />
            <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
            <Button pill={true} outline={true} class="!p-2" size="lg" on:click={syncData}>
            </Button>
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