<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="relative w-full flex flex-row justify-center items-center">
      <input-view
        id="task-input"
        name="task-input"
        classes="border w-full p-2 rounded-md shadow-sm border-[#35566E] text-[#675958] placeholder:text-[calc(.7em+.6vw)] text-[calc(.7em+.6vw)] focus:outline-none focus:border-[#0fa2b6] max-sm:text-[calc(.8em+.7vw)]"
        placeholder="add new task"
        type="text"
        max-length="30"
        :on-input="handleInput"
      />
      <text-view
        tag="span"
        classes="absolute right-3 text-[#A3BED3] text-[calc(.5em+.5vw)]"
        :text="counter + '/30'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputView from '../../atoms/input/InputView.vue';
import TextView from '../../atoms/text/TextView.vue';

export default defineComponent({
  name: 'TaskInput',
  components: {
    InputView,
    TextView,
  },

  props: {
    counter: {
      type: Number,
      required: true,
    },
  },

  methods: {
    handleInput(e: Event) {
      if (e instanceof InputEvent && e.target instanceof HTMLInputElement) {
        this.$emit('update-value', e.target.value);
      }
    },
  },
});
</script>
