<template>
  <div class="form">
    <div>
      <button v-for="tab in tabs" :key="tab" @click="selected = tab"
        :class="['tab-btn', { active: selected === tab }]"
      >
        {{ tab }}
      </button>
      <component :is="selected"></component>
    </div>
  </div>
</template>

<script>
import WorkflowActions from './WorkflowActions.vue';
import WorkflowSettings from './WorkflowSettings.vue';
import WorkflowSteps from './WorkflowSteps.vue';

export default {
  data: function () {
    return {
      tabs: ["WorkflowSteps","WorkflowSettings","WorkflowActions"],
      selected: "WorkflowSteps",
    };
  },
  components: {
   WorkflowSteps,
   WorkflowSettings,
   WorkflowActions

  },
};
</script>
