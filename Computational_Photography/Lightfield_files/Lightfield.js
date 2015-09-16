// Created by iWeb 3.0.2 local-build-20101213

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="600" height="488" style="height: 488px; left: 50px; position: absolute; top: 1519px; width: 600px; z-index: 1; "><param name="src" value="Media/lightfield.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="600" height="488" style="height: 488px; left: 50px; position: absolute; top: 1519px; width: 600px; z-index: 1; "><param name="src" value="Lightfield_files/lightfield.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/lightfield.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="600" height="488" data="Media/lightfield.mov" style="height: 488px; left: 50px; position: absolute; top: 1519px; width: 600px; z-index: 1; "><param name="src" value="Media/lightfield.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
function writeMovie2()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id6" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="262" style="height: 262px; left: 187px; position: absolute; top: 2581px; width: 300px; z-index: 1; "><param name="src" value="Media/lightfield_example.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id6" type="video/quicktime" width="300" height="262" style="height: 262px; left: 187px; position: absolute; top: 2581px; width: 300px; z-index: 1; "><param name="src" value="Lightfield_files/lightfield_example.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/lightfield_example.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id6" type="video/quicktime" width="300" height="262" data="Media/lightfield_example.mov" style="height: 262px; left: 187px; position: absolute; top: 2581px; width: 300px; z-index: 1; "><param name="src" value="Media/lightfield_example.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
function writeMovie3()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id7" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="600" height="488" style="height: 488px; left: 50px; position: absolute; top: 2056px; width: 600px; z-index: 1; "><param name="src" value="Media/lightfiled2.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id7" type="video/quicktime" width="600" height="488" style="height: 488px; left: 50px; position: absolute; top: 2056px; width: 600px; z-index: 1; "><param name="src" value="Lightfield_files/lightfiled2.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/lightfiled2.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id7" type="video/quicktime" width="600" height="488" data="Media/lightfiled2.mov" style="height: 488px; left: 50px; position: absolute; top: 2056px; width: 600px; z-index: 1; "><param name="src" value="Media/lightfiled2.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Lightfield_files/LightfieldMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');Widget.onload();fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
