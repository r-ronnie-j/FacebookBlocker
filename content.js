let individual, sponsored, suggested, group, all;
chrome.storage.local.get(
  ["All", "Individual", "Sponsored", "Suggested", "Group"],
  function (set) {
    individual = set.Individual;
    sponsored = set.Sponsored;
    suggested = set.Suggested;
    group = set.Group;
    all = set.All;
    span_feed = document.querySelector("#ssrb_feed_start");
    if (span_feed) {
      feed = span_feed.nextElementSibling;
      feedContainer = span_feed.parentElement;
      //we are keeeping feed Container false for now we will determine its value with the help of option page
      if (all) {
        feedContainer.hidden = true;
      } else {
        if ((feed.role = "feed")) {
          feedUnit = feed.childNodes[2];
          if (feedUnit.dataset.pagelet == "FeedUnit_0") {
            {
              word = findGroup(feedUnit);
              if (word == "Individual" && individual) {
                feedUnit.hidden = true;
              }
              if (word == "Sponsored" && sponsored) {
                feedUnit.hidden = true;
              }
              if (word == "Suggested" && suggested) {
                feedUnit.hidden = true;
              }
              if (word == "Group" && group) {
                feedUnit.hidden = true;
              }
            }
            while (feedUnit.nextElementSibling.dataset.pagelet) {
              if (all) {
                feed;
              } else {
                feedUnit = feedUnit.nextElementSibling;
                word = findGroup(feedUnit);
                if (word == "Individual") {
                  feedUnit.hidden = true;
                }
                if (word == "Suggested") {
                  feedUnit.hidden = true;
                }
                if (word == "Group") {
                  feedUnit.hidden = true;
                }
              }
            }
            observer = new MutationObserver(function (ram) {
              while (feedUnit.nextElementSibling.dataset.pagelet) {
                feedUnit = feedUnit.nextElementSibling;
                word = findGroup(feedUnit);
                if (word == "Individual" && individual) {
                  feedUnit.hidden = true;
                }
                if (word == "Sponsored" && sponsored) {
                  feedUnit.hidden = true;
                }
                if (word == "Suggested" && suggested) {
                  feedUnit.hidden = true;
                }
                if (word == "Group" && group) {
                  feedUnit.hidden = true;
                }
              }
            });
            observer.observe(feed, {
              subtree: true,
              childList: true,
            });
          } else {
            console.log("We were unable to select the feed Unit");
          }
        } else {
          console.log("We were unable to select the feed");
        }
      }
    } else {
      console.log("We were unable to select the span");
    }

    function findGroup(feedUnit) {
      for (f of feedUnit.childNodes) {
        if (f.tagName == "SPAN") {
          if (f.innerText.includes("Suggested for you")) {
            return "Suggested";
          }
          if (f.innerText.includes("Sponsored")) {
            return "Sponsored";
          }
        }
        if (f.tagName == "svg") {
          if (f.childNodes[0].tagName == "title") {
            if (f.childNodes[0].innerHTML.includes("Shared with Public")) {
              return "Individual";
            }
            if (f.childNodes[0].innerHTML.includes("Shared with Members")) {
              return "Group";
            }
            if (f.childNodes[0].innerHTML.includes("friends")) {
              return "Individual";
            }
          }
        }
        if (f.hasChildNodes() == false && f.tagName != "SPAN") {
          continue;
        }
        if (!f.tagName) {
          continue;
        }
        v = findGroup(f);
        if (v == "Suggested") {
          return v;
        } else if (v == "Sponsored") {
          return v;
        } else if (v == "Individual") {
          return v;
        } else if (v == "Group") {
          return v;
        } else {
          continue;
        }
      }
      return "individual";
    }
  }
);
chrome.storage.onChanged.addListener(function () {
  let individual, sponsored, suggested, group, all;
  chrome.storage.local.get(
    ["All", "Individual", "Sponsored", "Suggested", "Group"],
    function (set) {
      individual = set.Individual;
      sponsored = set.Sponsored;
      suggested = set.Suggested;
      group = set.Group;
      all = set.All;
      span_feed = document.querySelector("#ssrb_feed_start");
      if (span_feed) {
        feed = span_feed.nextElementSibling;
        feedContainer = span_feed.parentElement;
        //we are keeeping feed Container false for now we will determine its value with the help of option page
        if (all) {
          feedContainer.hidden = true;
        } else {
          if ((feed.role = "feed")) {
            feedUnit = feed.childNodes[2];
            if (feedUnit.dataset.pagelet == "FeedUnit_0") {
              {
                word = findGroup(feedUnit);
                if (word == "Individual" && individual) {
                  feedUnit.hidden = true;
                }
                if (word == "Sponsored" && sponsored) {
                  feedUnit.hidden = true;
                }
                if (word == "Suggested" && suggested) {
                  feedUnit.hidden = true;
                }
                if (word == "Group" && group) {
                  feedUnit.hidden = true;
                }
              }
              while (feedUnit.nextElementSibling.dataset.pagelet) {
                if (all) {
                  feed;
                } else {
                  feedUnit = feedUnit.nextElementSibling;
                  word = findGroup(feedUnit);
                  if (word == "Individual") {
                    feedUnit.hidden = true;
                  }
                  if (word == "Suggested") {
                    feedUnit.hidden = true;
                  }
                  if (word == "Group") {
                    feedUnit.hidden = true;
                  }
                }
              }
              observer = new MutationObserver(function (ram) {
                while (feedUnit.nextElementSibling.dataset.pagelet) {
                  feedUnit = feedUnit.nextElementSibling;
                  word = findGroup(feedUnit);
                  if (word == "Individual" && individual) {
                    feedUnit.hidden = true;
                  }
                  if (word == "Sponsored" && sponsored) {
                    feedUnit.hidden = true;
                  }
                  if (word == "Suggested" && suggested) {
                    feedUnit.hidden = true;
                  }
                  if (word == "Group" && group) {
                    feedUnit.hidden = true;
                  }
                }
              });
              observer.observe(feed, {
                subtree: true,
                childList: true,
              });
            } else {
              console.log("We were unable to select the feed Unit");
            }
          } else {
            console.log("We were unable to select the feed");
          }
        }
      } else {
        console.log("We were unable to select the span");
      }

      function findGroup(feedUnit) {
        for (f of feedUnit.childNodes) {
          if (f.tagName == "SPAN") {
            if (f.innerText.includes("Suggested for you")) {
              return "Suggested";
            }
            if (f.innerText.includes("Sponsored")) {
              return "Sponsored";
            }
          }
          if (f.tagName == "svg") {
            if (f.childNodes[0].tagName == "title") {
              if (f.childNodes[0].innerHTML.includes("Shared with Public")) {
                return "Individual";
              }
              if (f.childNodes[0].innerHTML.includes("Shared with Members")) {
                return "Group";
              }
              if (f.childNodes[0].innerHTML.includes("friends")) {
                return "Individual";
              }
            }
          }
          if (f.hasChildNodes() == false && f.tagName != "SPAN") {
            continue;
          }
          if (!f.tagName) {
            continue;
          }
          v = findGroup(f);
          if (v == "Suggested") {
            return v;
          } else if (v == "Sponsored") {
            return v;
          } else if (v == "Individual") {
            return v;
          } else if (v == "Group") {
            return v;
          } else {
            continue;
          }
        }
        return "individual";
      }
    }
  );
});
