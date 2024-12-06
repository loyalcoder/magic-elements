<style>
    #typewriter {
  font-family: 'Courier New', Courier, monospace;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black;
  display: inline-block;
}

#text {
  display: inline;
  color: #333;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

#typewriter {
  animation: blink 0.7s step-end infinite;
}

</style>
<div id="typewriter">
  <span id="text"></span>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('text');
  const textToType = "Hello, welcome to the typewriter effect demo!";
  const typingSpeed = 100; // milliseconds

  let index = 0;

  function typeWriter() {
    if (index < textToType.length) {
      textElement.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  typeWriter();
});

</script>