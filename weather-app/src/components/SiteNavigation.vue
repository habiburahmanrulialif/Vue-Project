<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3 flex-1">
          <i class="fa-solid fa-sun"></i>
          <p class="text-2xl">Ramalan Cuaca Lokal</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <i class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer" @click="handler.modalhandler"></i>
        <i class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"></i>
      </div>

      <BaseModal>
        <h1 class="text-black">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            Ramalan Cuaca Lokal memungkinkan Anda melacak cuaca terkini dan akan datang pada kota pilihan Anda.
          </p>
          <h2 class="text-2xl">Cara kerja:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Masukkan nama daerah yang ingin anda ketahui perkiraan cuacanya pada <i>search bar</i>.
            </li>
            <li>
              Pilih salah satu kota dari pilihan yang muncul.
            </li>
            <li>
              Lacak kota dengan mengklik ikon "+" di kanan atas. Ini akan menyimpan kota untuk dilihat pada lain waktu di halaman beranda.
            </li>
          </ol>

          <h2 class="text-2xl">Menghapus kota yang telah dilacak:</h2>
          <p>
            Jika Anda tidak ingin lagi melacak kota, cukup pilih kota di halaman beranda. Di bagian bawah halaman, akan ada opsi untuk menghapus kota.
          </p>
        </h1>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import BaseModal from "./BaseModal.vue";
import { handlerStore } from '../stores/handler.js';

const handler = handlerStore();

</script>