((e) => {
  for (
    var i = 32 * (parseInt(prompt("Size Multiplier", "1")) || 1),
      o = new Date(2e14).toUTCString(),
      a = location.hostname.split(".").slice(-2).join("."),
      n = 0;
    n < 100;
    n++
  )
    document.cookie = `cd${n}=${encodeURIComponent(
      btoa(
        String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(i)))
      )
    ).substring(0, i)};expires=${o};domain=${a};path=/`;
  alert("OK");
})();
