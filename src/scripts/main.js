// Setup
var each = Array.prototype.forEach;

each.call(document.querySelectorAll('[data-code-colour]'), function (elem) {
  var colour = elem.textContent.trim();
  var preview = document.createElement('span');
  preview.className = 'code-colour-preview';
  preview.style.backgroundColor = colour;
  elem.insertBefore(preview, elem.firstChild);
});

function updateBlendDemo(stage) {
  var colours = {
    source: [255, 0, 0, 0.6],
    dest: [255, 255, 255, 1],
    output: [, , , 1]
  };
  var i;

  stage = +stage || 0;
  if (stage) {
    if (stage >= 1) {
      for (i = 0; i < 3; i++) {
        colours.source[i] *= colours.source[3];
      }
    }
    if (stage >= 2) {
      for (i = 0; i < 4; i++) {
        colours.dest[i] *= (1 - colours.source[3]);
      }
    }
  }

  for (i = 0; i < 3; i++) {
    colours.output[i] = colours.source[i] + colours.dest[i];
  }

  var bits = ['red', 'green', 'blue', 'alpha'];
  each.call(document.querySelectorAll('.demo-blend tr'), function (row) {
    var bit = row.className.replace('channel-', '');
    var bitIdx = bits.indexOf(bit);
    if (bitIdx === -1) {
      return;
    }
    each.call(row.children, function (cell) {
      var type = cell.getAttribute('data-type');
      if (!type) {
        return;
      }
      var code = cell.querySelector('code');
      var fill = cell.querySelector('.channel-fill');
      var value = colours[type][bitIdx];
      if (code) {
        code.textContent = value;
      }
      if (fill) {
        var perc = bit === 'alpha' ? value : value / 255;
        fill.style.height = (perc * 100) + '%';
      }
    });
  });
}
updateBlendDemo();


// Default bespoke plugins
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  state = require('bespoke-state'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash');

// Custom plugins
var linkedBullets = require('./plugin-linked-steps');

// Grand finale
var generateLogo = require('./generate-logo');
var logoHolder = document.querySelector('.demo-logo .showcase-target');
generateLogo(logoHolder);

// Background image layering demos
var bgImageShowcase = require('./bgimage-showcase');
var showcasePlugin = function () {
  return function (deck) {
    var targets = deck.slides.map(function (slide) {
      var hasShowcase = slide.hasAttribute('data-bgimage-showcase');
      if (hasShowcase) {
        var target = slide.querySelector('.showcase-target');
        if (target) {
          return target;
        }
      }
    });

    deck.on('activate', function (event) {
      var target = targets[event.index];
      if (target) {
        bgImageShowcase.inspect(target, {
          container: target.parentNode,
          padding: 40,
          startMode: target.getAttribute('data-showcase-start-mode')
        });
      }
    });

    deck.on('deactivate', function (event) {
      var target = targets[event.index];
      if (target) {
        bgImageShowcase.stop();
      }
    });
  };
};

// Bespoke.js
var deck = bespoke.from('article', [
  classes(),
  state(),
  keys(),
  touch(),
  linkedBullets(),
  showcasePlugin(),
  backdrop(),
  scale(),
  hash()
]);

// Various Lea Verou libraries loaded via bower_components
require('prism');
require('prefixfree');
require('conic-gradient');

// Custom events
deck.on('linked-step-change', function (event) {
  updateBlendDemo(event.step);
});

