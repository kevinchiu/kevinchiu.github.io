// Created by iWeb 3.0.2 local-build-20101213

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id12" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="512" height="804" style="height: 804px; left: 94px; position: absolute; top: 2591px; width: 512px; z-index: 1; "><param name="src" value="Media/lemons.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id12" type="video/quicktime" width="512" height="804" style="height: 804px; left: 94px; position: absolute; top: 2591px; width: 512px; z-index: 1; "><param name="src" value="Spectrum_files/lemons.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/lemons.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id12" type="video/quicktime" width="512" height="804" data="Media/lemons.mov" style="height: 804px; left: 94px; position: absolute; top: 2591px; width: 512px; z-index: 1; "><param name="src" value="Media/lemons.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
function writeMovie2()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id13" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="512" height="811" style="height: 811px; left: 94px; position: absolute; top: 3457px; width: 512px; z-index: 1; "><param name="src" value="Media/peppers2%20-%20Computer.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id13" type="video/quicktime" width="512" height="811" style="height: 811px; left: 94px; position: absolute; top: 3457px; width: 512px; z-index: 1; "><param name="src" value="Spectrum_files/peppers2%20-%20Computer.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/peppers2%20-%20Computer.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id13" type="video/quicktime" width="512" height="811" data="Media/peppers2%20-%20Computer.m4v" style="height: 811px; left: 94px; position: absolute; top: 3457px; width: 512px; z-index: 1; "><param name="src" value="Media/peppers2%20-%20Computer.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_3:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,298),url:'Spectrum_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Spectrum_files/stroke_1.png'},{rect:new IWRect(1,-1,298,2),url:'Spectrum_files/stroke_2.png'},{rect:new IWRect(299,-1,2,2),url:'Spectrum_files/stroke_3.png'},{rect:new IWRect(299,1,2,298),url:'Spectrum_files/stroke_4.png'},{rect:new IWRect(299,299,2,2),url:'Spectrum_files/stroke_5.png'},{rect:new IWRect(1,299,298,2),url:'Spectrum_files/stroke_6.png'},{rect:new IWRect(-1,299,2,2),url:'Spectrum_files/stroke_7.png'}],new IWSize(300,300)),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Spectrum_files/SpectrumMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
