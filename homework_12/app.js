const model = {
  currentPerson: {},
  allPersons: [
    {
      name: "Lily Butler",
      score: 2,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/1.jpg"
    },
    {
      name: "Waller Perry",
      score: 4,
      photoUrl: "http://api.randomuser.me/portraits/thumb/women/1.jpg"
    },
    {
      name: "Tammi Donovan",
      score: 5,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/2.jpg"
    },
    {
      name: "Doreen Flowers",
      score: 4,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/3.jpg"
    },
    {
      name: "Price Pace",
      score: 2,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/4.jpg"
    },
    {
      name: "Larson Maldonado",
      score: 1,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/5.jpg"
    },
    {
      name: "Berg Bolton",
      score: 5,
      photoUrl: "http://api.randomuser.me/portraits/thumb/women/2.jpg"
    },
    {
      name: "Mack Lott",
      score: 3,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/6.jpg"
    },
    {
      name: "Rosanna Mcleod",
      score: 4,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/7.jpg"
    },
    {
      name: "Rosalie Rice",
      score: 1,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/8.jpg"
    },
    {
      name: "Virginia Buchanan",
      score: 2,
      photoUrl: "http://api.randomuser.me/portraits/thumb/women/3.jpg"
    },
    {
      name: "Lorna Stein",
      score: 4,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/9.jpg"
    },
    {
      name: "Rosalie Steele",
      score: 3,
      photoUrl: "http://api.randomuser.me/portraits/thumb/women/4.jpg"
    },
    {
      name: "Wilcox Boyd",
      score: 5,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/10.jpg"
    },
    {
      name: "Ollie Rice",
      score: 5,
      photoUrl: "http://api.randomuser.me/portraits/thumb/men/11.jpg"
    }
  ]
};

const control = {
  init: function() {
    listView.init();
    listView.render();

    scoresView.init();
    scoresView.render();
    sortControls.init();

    profileView.init();
  },
  getAllNames: function() {
    return model.allPersons.map(el => el.name);
  },
  getAllScores: function() {
    return model.allPersons.map(el => el.score);
  },
  setCurrentPerson: function(index) {
    model.currentPerson = model.allPersons[index];
    this.viewCurrentProfile();
  },
  getCurrentPerson: function() {
    return model.currentPerson;
  },
  viewCurrentProfile: function() {
    profileView.render();
  },
  setCurrentPersonScore: function(value) {
    model.currentPerson.score = value;
    profileView.render();
    scoresView.render();
  },
  ascendingNameSort: function() {
    model.allPersons.sort(function(a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    listView.render();
    scoresView.render();
  },
  descendingNameSort: function() {
    model.allPersons.sort(function(a, b) {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    listView.render();
    scoresView.render();
  },
  ascendingScoreSort: function() {
    model.allPersons.sort(function(a, b) {
      if (a.score > b.score) return 1;
      if (a.score < b.score) return -1;
      return 0;
    });
    listView.render();
    scoresView.render();
  },
  descendingScoreSort: function() {
    model.allPersons.sort(function(a, b) {
      if (a.score < b.score) return 1;
      if (a.score > b.score) return -1;
      return 0;
    });
    listView.render();
    scoresView.render();
  }
};

const listView = {
  init: function() {
    this.$container = $(".names");
    this.handleClicks();
  },
  render: function() {
    let template = control.getAllNames().reduce((acc, cur, i) => {
      return (acc += `<li>${cur}</li>`);
    }, "");
    this.$container.html(template);
  },
  handleClicks: function() {
    this.$container.on("click", "li", function(e) {
      let currentIndex = $(e.target).index();
      control.setCurrentPerson(currentIndex);
    });
  }
};

const scoresView = {
  init: function() {
    this.$container = $(".scores");
    this.handleClicks();
  },
  render: function() {
    let template = control.getAllScores().reduce((acc, cur) => {
      return (acc += `
                <li>
                    <span>${cur}</span>
                    <input class="hidden score-input" type="text" value="${cur}">
                </li>
            `);
    }, "");
    this.$container.html(template);
  },
  handleClicks: function() {
    this.$container.on("click", "li", function(e) {
      let $currentLi = $(e.target);
      let $currentSpan = $currentLi.find("span");
      let $currentInput = $currentLi.find("input.score-input");
      let currentIndex = $currentLi.index();
      if (!$currentInput.is(".hidden")) {
        return false;
      }
      control.setCurrentPerson(currentIndex);
      $currentSpan.addClass("hidden");
      $currentInput.removeClass("hidden").focus();
    });
    this.$container.on("focusout .score-input", function(e) {
      let newScore = $(e.target).val();
      control.setCurrentPersonScore(newScore);
    });
  }
};

const profileView = {
  init: function() {
    this.$container = $(".profile");
  },
  render: function() {
    let currentPerson = control.getCurrentPerson();
    let template = `
            <img src="${currentPerson.photoUrl}">
            <h3>${currentPerson.name}</h3>
            <p>Score:${currentPerson.score}</p>
        `;
    this.$container.html(template);
  }
};

const sortControls = {
  init: function() {
    this.$container = $(".sort-controls");
    sortControls.render();
    this.handleClicks();
  },
  render: function() {
    let template = `<div class="sort-name">
                        <div>Name</div>
                        <div class="arrow">
                            <span class="arrow-up"></span>
                            <span class="arrow-down"></span>
                        </div>
                    </div>
                    <div class="sort-score">
                        <div>Score</div>
                        <div class="arrow">
                            <span class="arrow-up"></span>
                            <span class="arrow-down"></span>
                        </div>
                    </div>`;
    this.$container.html(template);
  },
  handleClicks: function() {
    this.$container.on("click", ".sort-name", function() {
      let arrowUp = $(".sort-name .arrow-up");
      let arrowDown = $(".sort-name .arrow-down");
      if (arrowUp.is(":visible") && arrowDown.is(":visible")) {
        arrowDown.addClass("active-arrow");
        arrowUp.hide();
        control.descendingNameSort();
      } else {
        if (arrowUp.is(":hidden")) {
          arrowUp.show().addClass("active-arrow");
          arrowDown.removeClass("active-arrow").hide();
          control.ascendingNameSort();
        } else {
          arrowDown.show().addClass("active-arrow");
          arrowUp.removeClass("active-arrow").hide();
          control.descendingNameSort();
        }
      }
    });
    this.$container.on("click", ".sort-score", function() {
      let arrowUp = $(".sort-score .arrow-up");
      let arrowDown = $(".sort-score .arrow-down");
      if (arrowUp.is(":visible") && arrowDown.is(":visible")) {
        arrowDown.addClass("active-arrow");
        arrowUp.hide();
        control.descendingScoreSort();
      } else {
        if (arrowUp.is(":hidden")) {
          arrowUp.show().addClass("active-arrow");
          arrowDown.removeClass("active-arrow").hide();
          control.ascendingScoreSort();
        } else {
          arrowDown.show().addClass("active-arrow");
          arrowUp.removeClass("active-arrow").hide();
          control.descendingScoreSort();
        }
      }
    });
  }
};

control.init();
