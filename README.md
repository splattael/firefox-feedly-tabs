# DISCONTINUED

:warning: :warning: :warning:

This FireFox addons has been discontinued.

Please use https://github.com/SemperRoto/firefox-feedly-tabs.

:warning: :warning: :warning:

---

# ![Feedly tabs icon](data/images/icon-32.png) Feedly tabs for Firefox

Open Feedly articles in new tabs.

# Installation

## As ADD-ON from addons.mozilla.org

See https://addons.mozilla.org/en-US/firefox/addon/feedly-tabs/

## Load unpacked extension

* `git clone https://github.com/splattael/firefox-feedly-tabs.git`
* Run `jpm run`

## Release extension in Firefox ADD-ON developer hub (as XPI)

* code
* bump version in package.json
* `git tag vVERSION`
* `git push --tags`
* `jpm xpi`
* Upload `*.xpi` to https://addons.mozilla.org/en-US/developers/addons

## Ideas

* Configure amount of tabs to open (default 20)
* Mark article read if tabs is closed or URL has changed

## Chrome version?

See https://github.com/splattael/chrome-feedly-tabs

## License

[MIT License](LICENSE.txt)
