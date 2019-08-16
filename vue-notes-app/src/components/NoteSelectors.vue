<template>
<div class="note-selectors">
  <note-selector
    v-for="note in notes"
    v-bind:key="note.id"
    v-bind:note="note"
    v-bind:selectedNoteId="selectedNoteId"
    v-on:selectNote="setSelectNote"
    />
</div>
</template>

<script>
  import NoteSelector from "./NoteSelector";
  import NoteEditor from "./NoteEditor";
export default {
  name: 'note-selectors',
  components: {
    NoteSelector
  },
  data: function() {
    return {
      notes: [
        { id: 1, body: "This is a first test", timestamp: Date.now() },
        { id: 2, body: "This is a second test", timestamp: Date.now() },
        { id: 3, body: "This is a third test", timestamp: Date.now() },
        { id: 4, body: "This is a fourth test", timestamp: Date.now() }
      ],
      selectedNoteId: 3
    }
  },
  methods: {
    setSelectNote: function(noteId) {
      console.log(noteId);
      this.selectNoteId = noteId;
    }
  }
};
</script>
