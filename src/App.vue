<template>
  <div class="tdesign-demo-item--layout">
    <!--    <t-head-menu theme="dark" height="120px" defaultValue="item1" @change="changeHandler">-->
    <!--      <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo"/>-->
    <!--      <t-menu-item value="item1">大模型对话</t-menu-item>-->
    <!--&lt;!&ndash;      <t-menu-item value="item2">大模型对话</t-menu-item>&ndash;&gt;-->
    <!--      <template #operations>-->
    <!--        <div class="t-demo-menu&#45;&#45;dark">-->
    <!--          <t-button variant="text" shape="square">-->
    <!--            <search-icon slot="icon"/>-->
    <!--          </t-button>-->
    <!--          <t-button variant="text" shape="square">-->
    <!--            <mail-icon slot="icon"/>-->
    <!--          </t-button>-->
    <!--          <t-button variant="text" shape="square">-->
    <!--            <user-icon slot="icon"/>-->
    <!--          </t-button>-->
    <!--          <t-button variant="text" shape="square">-->
    <!--            <ellipsis-icon slot="icon"/>-->
    <!--          </t-button>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--    </t-head-menu>-->
    <!--    <DataLog v-if="menu==='item2'" style="padding-left: 10%;padding-right: 10%;padding-top: 3%"></DataLog>-->
    <AiDiaLog></AiDiaLog>
  </div>
</template>

<script>
// import DataLog from "@/DataLog";
import AiDiaLog from "@/AiDiaLog";

export default {
  components: {
    AiDiaLog
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
