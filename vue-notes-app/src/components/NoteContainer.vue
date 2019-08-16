<template>
<div class="note-container">
   <note-selectors />
   <note-editor />
 </div>
</template>

<script>
  import NoteSelectors from "./NoteSelectors.vue";
  import NoteEditor from "./NoteEditor.vue"
export default {
  name: 'note-container',
  components: {
    NoteSelectors,
    NoteEditor
  }
};
</script>