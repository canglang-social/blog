# Build-only social-card font

Noto Serif SC Regular, official static subset font from the Noto CJK project:
https://github.com/notofonts/noto-cjk/blob/main/Serif/SubsetOTF/SC/NotoSerifSC-Regular.otf

Bundled unchanged with its SIL Open Font License in OFL.txt. This makes English
and Simplified Chinese cards independent of build-host fonts and network access.
The font is only read during static card generation; it is not a browser font.

Glyph outlines are read by opentype.js and rasterized by sharp, so the output
does not depend on Pango or installed font-family resolution.
