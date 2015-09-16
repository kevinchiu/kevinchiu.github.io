// Created by iWeb 3.0.2 local-build-20101213

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id8" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="546" height="323" style="height: 323px; left: 77px; position: absolute; top: 2781px; width: 546px; z-index: 1; "><param name="src" value="Media/relighting_movie-1.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id8" type="video/quicktime" width="546" height="323" style="height: 323px; left: 77px; position: absolute; top: 2781px; width: 546px; z-index: 1; "><param name="src" value="Relighting_files/relighting_movie.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/relighting_movie-1.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id8" type="video/quicktime" width="546" height="323" data="Media/relighting_movie-1.m4v" style="height: 323px; left: 77px; position: absolute; top: 2781px; width: 546px; z-index: 1; "><param name="src" value="Media/relighting_movie-1.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,223),url:'Relighting_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Relighting_files/stroke_1.png'},{rect:new IWRect(1,-1,298,2),url:'Relighting_files/stroke_2.png'},{rect:new IWRect(299,-1,2,2),url:'Relighting_files/stroke_3.png'},{rect:new IWRect(299,1,2,223),url:'Relighting_files/stroke_4.png'},{rect:new IWRect(299,224,2,2),url:'Relighting_files/stroke_5.png'},{rect:new IWRect(1,224,298,2),url:'Relighting_files/stroke_6.png'},{rect:new IWRect(-1,224,2,2),url:'Relighting_files/stroke_7.png'}],new IWSize(300,225))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Relighting_files/RelightingMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
