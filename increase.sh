#!/bin/sh

set -eu

[ -z "${1:-}" ] && exit 1

if [ "red" != "$1" ] && [ "blue" != "$1" ]; then
    exit 1
fi

line="$(grep "<p id=\"${1}-counter\">" ./index.html)"
n="${line#*Clicked: }"
n="$((${n%% *} + 1))"

sed -Ei "s|(<p id=\"${1}-counter\">Clicked:) [0-9]+|\1 $n|" index.html

