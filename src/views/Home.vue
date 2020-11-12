<template>
  <div>
    <AldeaMain />
    <Welcome />
    <Cine />
  </div>
</template>

<script>
import AldeaMain from "@/components/aldea/AldeaMain";
import Welcome from "@/components/welcome/Welcome";
import Cine from "@/components/cine/Cine";

export default {
  name: "Home",
  components: { Cine, Welcome, AldeaMain },
};
</script>

<style scoped></style>
