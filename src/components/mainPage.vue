<template lang="html">
  <div class="form">
    <!-- <form @submit.prevent="handleSubmit">
      <input type="file" /> <input type="submit" />
    </form>
    <input type="file" id="file" ref="myFiles" class="custom-file-input"
  @change="previewFiles" multiple>
  <input id="fileChooser" type="file"> -->

  </div>
</template>

<script>
// var fileChooser = document.getElementById('fileChooser');
//
//
// function waitForTextReadComplete(reader) {
//     reader.onloadend = function(event) {
//         var text = event.target.result;
//
//         parseTextAsXml(text);
//     }
// }
//
//

export default {
  name: 'mainPage',
  data() {
    return {
      files: [],
    }
  }
//   methods: {
//     formO: function () {
//         var selectedFile = document.getElementById("input").files[0];
//         console.log(selectedFile);
//     },
//     previewFiles(event) {
//       this.files = this.$refs.myFiles.files
//       console.log(this.files);
//     console.log(event.target.files[0]);
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       var readXml = e.target.result;
//       console.log(readXml);
//       var parser = new DOMParser();
//
//       var doc = parser.parseFromString(readXml, "application/xml");
//
//       console.log(doc);
//       // var jsonXML = xmlToJson(doc)
//       // console.log(jsonXML);
//
//       //console.log(xmlToJson(doc));
//     };
//  },
//   handleFileSelection() {
//      var file = fileChooser.files[0],
//          reader = new FileReader();
//
//      waitForTextReadComplete(reader);
//      reader.readAsText(file);
//  },
//   parseTextAsXml(text) {
//      var parser = new DOMParser(),
//          xmlDom = parser.parseFromString(text, "text/xml");
//          console.log(xmlDom);
//
//      //now, extract items from xmlDom and assign to appropriate text input fields
//  },
//
//   waitForTextReadComplete(reader) {
//      reader.onloadend = function(event) {
//          var text = event.target.result;
//
//          parseTextAsXml(text);
//      }
//  }
//
// },
// watch: {
//   #fileChooser: function () {
//     this.handleFileSelection()
//   }
// }
 }
</script>

<style lang="css" scoped>
</style>
