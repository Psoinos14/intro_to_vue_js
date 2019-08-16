<template>
  <div class ="note-selector" v-bind:class="{active: selectedNoteId === note.id}" v-on:click="setSelectedNoteId(note.id)">
    <p class="note-selector-title">{{ note.body }} </p>
    <p class="note-selector-timestamp">{{note.timestamp}}</p>
  </div>
 
</template>

<script>
export default {
  name: 'note-selector',
  props: ['note', 'selectedNoteId'],
  methods: {
    setSelectedNoteId: function(noteId) {
      this.$emit("selectNote", noteId)
    }
  }
};
</script>
