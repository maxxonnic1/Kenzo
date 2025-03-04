document.addEventListener("DOMContentLoaded", function() {
  const terminal = document.getElementById("terminal");
  const terminalOutput = document.getElementById("terminal-output");
  const portfolio = document.getElementById("portfolio");
  const bgText = document.querySelector(".scroll-text");

  // Terminal-Öffnungsanimation (unverändert)
  const commands = [
    "C:\\> echo Willkommen zu meinem Portfolio",
    "C:\\> cd portfolio",
    "C:\\portfolio> ls",
    "C:\\portfolio> start index.html",
    "C:\\portfolio> echo Lade Portfolio..."
  ];
  let cmdIndex = 0;
  let charIndex = 0;
  function typeTerminal() {
    if (cmdIndex < commands.length) {
      if (charIndex < commands[cmdIndex].length) {
        terminalOutput.textContent += commands[cmdIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeTerminal, 50);
      } else {
        terminalOutput.textContent += "\n";
        cmdIndex++;
        charIndex = 0;
        setTimeout(typeTerminal, 500);
      }
    } else {
      setTimeout(transitionToPortfolio, 1000);
    }
  }
  function transitionToPortfolio() {
    terminal.style.transition = "opacity 1s ease";
    terminal.style.opacity = "0";
    setTimeout(() => {
      terminal.classList.add("hidden");
      portfolio.classList.remove("hidden");
    }, 1000);
  }

  // Hintergrund-Typing-Effekt: kürzere Befehle, sodass mehr Text passt.
  // Sobald alle bgCommands durchlaufen sind, wird nur der Hintergrundtext zurückgesetzt und direkt neu gestartet.
  const bgCommands = [
    "C:\\> ipconfig\n\nIP Config: 192.168.1.45 | 255.255.255.0 | GW: 192.168.1.1\n",
    "C:\\> ipconfig /all\n\nDetailed Config: Host: KenzoPC, DHCP: Yes, DNS: 8.8.8.8,1.1.1.1\n",
    "C:\\> netstat -a\n\nConnections: ESTABLISHED: 3, TIME_WAIT: 2, LISTENING: 5\n",
    "C:\\> tracert www.example.com\n\nHop 1: 192.168.1.1, Hop 2: 10.0.0.1, Hop 3: 203.0.113.1, ...\n",
  ];
  let bgCmdIndex = 0;
  let bgCharIndex = 0;
  function typeBackground() {
    let currentCommand = bgCommands[bgCmdIndex];
    bgText.textContent += currentCommand.charAt(bgCharIndex);
    bgCharIndex++;
    if (bgCharIndex >= currentCommand.length) {
      bgText.textContent += "\n";
      bgCmdIndex++;
      bgCharIndex = 0;
      // Sobald alle Befehle einmal durchgelaufen sind, Text sofort löschen und neu starten
      if (bgCmdIndex >= bgCommands.length) {
        bgText.textContent = "";
        bgCmdIndex = 0;
      }
    }
    setTimeout(typeBackground, 50);
  }

  typeTerminal();
  typeBackground();
});
