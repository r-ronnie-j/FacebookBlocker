group = document.querySelector("#Group");
all = document.querySelector("#All");
individual = document.querySelector("#Individual");
sponsored = document.querySelector("#Sponsored");
suggested = document.querySelector("#Suggested");
chrome.storage.local.get(
  ["Group", "All", "Individual", "Sponsored", "Suggested"],
  function (remain) {
    if (remain.All) {
      group.checked = true;
      all.checked = true;
      individual.checked = true;
      sponsored.checked = true;
      suggested.checked = true;
    } else {
      group.checked = remain.Group;
      individual.checked = remain.Individual;
      sponsored.checked = remain.Sponsored;
      suggested.checked = remain.Suggested;
    }
  }
);
all.addEventListener("change", function () {
  if (all.checked) {
    individual.checked = true;
    group.checked = true;
    sponsored.checked = true;
    suggested.checked = true;
    chrome.storage.local.set({ All: 1 });
  } else {
    individual.checked = false;
    group.checked = false;
    sponsored.checked = false;
    suggested.checked = false;
    chrome.storage.local.set({
      All: 0,
      Group: 0,
      Sponsored: 0,
      Suggested: 0,
      Individual: 0,
    });
  }
});
individual.addEventListener("change", function () {
  if (
    individual.checked &&
    group.checked &&
    sponsored.checked &&
    suggested.checked
  ) {
    all.checked = true;
    chrome.storage.local.set({ All: 1 });
  } else {
    all.checked = false;
    chrome.storage.local.set({ All: 0 });
    if (individual.checked) {
      chrome.storage.local.set({ Individual: 1 });
    } else {
      chrome.storage.local.set({ Individual: 0 });
    }
  }
});
group.addEventListener("change", function () {
  if (
    individual.checked &&
    group.checked &&
    sponsored.checked &&
    suggested.checked
  ) {
    all.checked = true;
    chrome.storage.local.set({ All: 1 });
  } else {
    all.checked = false;
    chrome.storage.local.set({ All: 0 });
    if (individual.checked) {
      chrome.storage.local.set({ Group: 1 });
    } else {
      chrome.storage.local.set({ Group: 0 });
    }
  }
});
sponsored.addEventListener("change", function () {
  if (
    individual.checked &&
    group.checked &&
    sponsored.checked &&
    suggested.checked
  ) {
    all.checked = true;
    chrome.storage.local.set({ All: 1 });
  } else {
    all.checked = false;
    chrome.storage.local.set({ All: 0 });
    if (sponsored.checked) {
      chrome.storage.local.set({ Sponsored: 1 });
    } else {
      chrome.storage.local.set({ Sponsored: 0 });
    }
  }
});
suggested.addEventListener("change", function () {
  if (
    individual.checked &&
    group.checked &&
    sponsored.checked &&
    suggested.checked
  ) {
    all.checked = true;
  } else {
    all.checked = false;
    chrome.storage.local.set({ All: 0 });
    if (suggested.checked) {
      chrome.storage.local.set({ Suggested: 1 });
    } else {
      suggested.storage.local.set({ Suggested: 0 });
    }
  }
});
submit = document.querySelector("#Submit");
submit.addEventListener("click", function () {
  if (all.checked) {
    chrome.storage.local.set({ All: 1 });
  } else {
    chrome.storage.local.set({ All: 0 });
  }
  if (suggested.checked) {
    chrome.storage.local.set({ Suggested: 1 });
  } else {
    chrome.storage.local.set({ Suggested: 0 });
  }
  if (sponsored.checked) {
    chrome.storage.local.set({ Sponsored: 1 });
  } else {
    chrome.storage.local.set({ Sponsored: 0 });
  }
  if (group.checked) {
    chrome.storage.local.set({ Group: 1 });
  } else {
    chrome.storage.local.set({ Group: 0 });
  }
  if (individual.checked) {
    chrome.storage.local.set({ Individual: 1 });
  } else {
    chrome.storage.local.set({ Individual: 0 });
  }
  alert("saved");
});
