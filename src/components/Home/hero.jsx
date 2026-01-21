import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0A1532]">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 border border-sky-500/20 rounded-full"></div>
                <div className="absolute top-40 right-20 w-32 h-32 border border-sky-500/10 rotate-45"></div>
                <div className="absolute bottom-40 left-1/4 w-48 h-48 border border-sky-500/15 rounded-lg rotate-12"></div>
            </div>

            {/* Main content */}
            <div className="container relative z-10 pt-10 pb-16 mx-auto ">
                {/* Header text */}
                <div className="text-center max-w-4xl mx-auto ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 font-bold">
                        International Real Estate Investing, Powered by Data
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Navigate the fragmented global market with confidence. Estate Atlas provides institutional-grade analytics, yield comparisons, and regulatory insights for Over 15 Countries.
                    </p>
                    <button className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 text-lg rounded-md transition-colors">
                        Analyze Global Markets
                    </button>
                </div>

                {/* Network visualization */}
                <div className="relative w-full mt-8">
                    {/* Gradient fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A1532] to-transparent z-30 pointer-events-none"></div>

                    {/* SVG Network */}
                    <div className="relative min-h-[520px] md:min-h-[600px]">
                        <svg
                            viewBox="0 25 100 60"
                            className=" inset-0 w-full h-full"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                              
                                <filter id="nodeGlow">
                                    <feGaussianBlur stdDeviation="0.4" result="blur"/>
                                    <feFlood floodColor="#3ba1df" floodOpacity="0.8"/>
                                    <feComposite in2="blur" operator="in"/>
                                    <feMerge>
                                        <feMergeNode/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                                <filter id="pulseGlow">
                                    <feGaussianBlur stdDeviation="0.8" result="blur"/>
                                    <feFlood floodColor="#3ba1df" floodOpacity="1"/>
                                    <feComposite in2="blur" operator="in"/>
                                    <feMerge>
                                        <feMergeNode/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>


                              
                                <g>
                                    <circle cx="5.259019813278359" cy="32.134043133032144" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="5.315835921770017" cy="34.275151891211195" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="5.34354654734733" cy="36.431573985575795" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="5.22118593956527" cy="38.607914888167244" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="5.243195378087001" cy="40.66166774727061" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="5.138227372668885" cy="43.04858437730608" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="7.3029349303339375" cy="31.914318404746204" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="7.3084463144639935" cy="34.27220763288747" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="7.287039288711056" cy="36.540672227805395" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="7.445800069169634" cy="38.62356579411762" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="7.461288519678014" cy="40.818916884794625" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="7.546049253594146" cy="43.05190728004477" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.684748851866729" cy="18.78335890847049" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.488478489012673" cy="20.93143935553246" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.4900675531666" cy="23.07370696471903" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.58413861402061" cy="25.542228795013656" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.656089025971804" cy="27.663272559712993" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.741611137237042" cy="29.682255596253984" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.485938178204693" cy="32.038103734986485" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.506382011859833" cy="34.139019956169236" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.543277259018959" cy="36.357095046078705" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.743454241165006" cy="38.49645351671432" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.717357595766627" cy="40.84641243672478" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="9.48406644467395" cy="42.88590314171813" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.85135502544029" cy="18.922908575231506" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.752487348029012" cy="20.979431283492243" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.669611525848811" cy="23.33946829566352" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.914666867597866" cy="25.507248021387685" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.79835271297606" cy="27.506359450758286" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.662573307208229" cy="29.79199965467748" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.706634959869234" cy="31.934456630646668" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.726667655442748" cy="34.31394572530548" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.78083529260743" cy="36.530115126172966" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.650749677523947" cy="38.7304210232202" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.841315716598626" cy="40.762979956162894" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="11.90761936775072" cy="43.075887373511286" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="13.93761294842715" cy="18.81011357291646" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="14.096162934831643" cy="20.876810102692946" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="13.932736456110312" cy="23.07757973036814" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="14.0257887170202" cy="25.39144951017649" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="14.00123769198924" cy="27.491036113362814" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="14.098811696322308" cy="29.869448152271747" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="13.918823040807702" cy="31.923692932521284" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="13.994333512567518" cy="34.07429985441339" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="14.038928402536344" cy="36.53778784998156" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="13.994552072371558" cy="38.48578686984743" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="13.890971547394345" cy="40.77750350268856" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="14.08788527858999" cy="43.09278889982727" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="13.91945448912882" cy="45.151208851568384" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="13.877379024554891" cy="47.46962753594516" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="14.039260208809191" cy="49.59702734681243" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.10084987948882" cy="18.938243083286746" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.337803574424882" cy="21.14424176379895" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.142632977364578" cy="23.15294461168497" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.20946524729202" cy="25.453875369144544" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.111960156588843" cy="27.61953449336215" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.088288528779845" cy="29.722047847112513" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.109963194087456" cy="32.04405907172107" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.282762436433888" cy="34.096170116361925" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.302934108153526" cy="36.48364607519233" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.165489556222564" cy="38.54966508481279" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.293083238174276" cy="40.81871009506368" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.2553492048712" cy="43.121664812179716" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.31262543685177" cy="45.320086481172844" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.221206562070392" cy="47.42155463043627" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.27395108623327" cy="49.57209062340663" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.25100764227481" cy="51.72655164143674" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="16.198395076564978" cy="53.97006700918337" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.503425400798992" cy="18.71255053515851" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.413050382675245" cy="21.01105112422367" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.45376667910918" cy="23.301878763337516" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.28526145812452" cy="25.54882146531956" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.37642890686762" cy="27.534937481225064" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.472278572488275" cy="29.8402565359822" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.26373501471553" cy="32.11093981185868" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.2671479081443" cy="34.19312945274803" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.34785221181771" cy="36.33559692282982" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.283801780370286" cy="38.63500456969721" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.447153380367407" cy="40.6656374211959" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.349257185253855" cy="43.005059188634505" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.41512986428998" cy="45.22811775571184" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.486353797551224" cy="47.52828951448521" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.323320440419685" cy="49.699609320784035" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.373803567903472" cy="51.7232491492095" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.526920553886484" cy="54.01460888865688" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.442787061492332" cy="56.124556068896965" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.39710827893494" cy="58.49918152441418" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.435857648984047" cy="60.65878199983702" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.26227940972919" cy="62.75948462246379" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.549046871888656" cy="65.11765033271347" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.372422625114243" cy="67.30122226981743" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.488502126695316" cy="69.5384176583455" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.337467117602984" cy="71.59149160884965" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.509051794430082" cy="73.93067949570649" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.457593942943525" cy="76.1405169726034" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.313270405624326" cy="78.07678093048855" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.545472461736363" cy="80.2988967311546" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.317970074963878" cy="82.7098287409023" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="18.36071186984142" cy="84.82013652081204" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.71572845654214" cy="18.684905899916238" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.450543568299953" cy="20.907390500652305" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.53822439506224" cy="23.298919002045707" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.564594196115817" cy="25.357598493553372" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.52631439962893" cy="27.702860178444965" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.724239489785404" cy="29.754607931478777" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.642429478989254" cy="32.10547824740437" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.604517060978537" cy="34.139899036981085" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.68651053919739" cy="36.50671893292025" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.56371263336286" cy="38.51787369418627" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.555732053278547" cy="40.941725272087076" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.573455492429343" cy="42.92201633810129" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.607916859311178" cy="45.3288278360908" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.672626256885266" cy="47.295584864913394" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.615079026490832" cy="49.737228766074445" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.53001187909252" cy="51.650305192827" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.681669007444437" cy="54.01933222865689" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.491050722790764" cy="56.063770265605136" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.544245767192365" cy="58.399314257818034" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.670627371600094" cy="60.45651865397466" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.59860853499027" cy="62.651060921875164" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.593606580362003" cy="65.11515615895024" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.63653582465112" cy="67.0627692972158" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.503320947660423" cy="69.42717447603306" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.598302860866987" cy="71.45722819124393" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.70507255894841" cy="73.87176257067959" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.61654441457277" cy="75.99717961093988" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.691346244710935" cy="78.1508725554903" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.524627091634308" cy="80.4510516135068" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.61291739803632" cy="82.68729400097943" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="20.61323134771086" cy="84.75590903821829" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.702468723928835" cy="25.3277304776087" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.923467129669234" cy="27.46621325811675" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.779771181068487" cy="29.65605854945196" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.84832889772594" cy="31.92467723060441" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.743863787350456" cy="34.24987830602582" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.766290139206316" cy="36.459968292224" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.75684704937545" cy="38.47478669825769" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.846503239921123" cy="40.838882698945454" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.790575378909693" cy="43.0102854643939" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.881583045704282" cy="45.07599098682123" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.788863705926417" cy="47.329087512306344" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.823175206532227" cy="49.614584127666866" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.85708793886672" cy="51.77467900901706" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.763797707403416" cy="53.98909887671216" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.944844513481378" cy="56.09389515074652" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.846814077250198" cy="58.32526865707525" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.67536867339585" cy="60.5206042294761" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.899134611991467" cy="62.69484451326962" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.650955020760406" cy="65.07543523726052" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.730499511273784" cy="67.3404517834352" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.865269374241866" cy="69.25116423062013" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.853942964588864" cy="71.64028327333737" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.867667778956324" cy="73.8894707941013" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.76057852752361" cy="76.0041428709605" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.851822297763324" cy="78.18982235131033" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.72916920676951" cy="80.33792776477308" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.874628881769297" cy="82.58129248681911" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.801821767358273" cy="84.71656022505641" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.8722393262481" cy="86.91497439635125" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="22.650549413311904" cy="89.26282502151822" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.967617090243653" cy="25.493436436395545" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.034841506550766" cy="27.595612989372235" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.128915902806924" cy="29.76951498299371" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.962205637650136" cy="31.87137460082539" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.89335643875034" cy="34.19936726763319" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.915604512876584" cy="36.494529732673165" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.976564250620353" cy="38.452548231718076" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.90150168170931" cy="40.83521849338896" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.002947352550173" cy="43.03834186448373" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.878959131728834" cy="45.26794579950627" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.13142461863507" cy="47.43719271586002" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.14773365667833" cy="49.48597751608528" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.941445073502152" cy="51.65490560149782" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.97302903905043" cy="53.98301989637238" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.089391400887287" cy="56.21065272988852" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.85064450741175" cy="58.54627743302532" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.99505860118793" cy="60.499591125986285" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.018514890861336" cy="62.87250910518363" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.90357955692093" cy="65.112720770419" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.096638922392962" cy="67.16850780971602" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.939067853997372" cy="69.46410500335122" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.04852869849787" cy="71.61953351321898" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.10104408623998" cy="73.92171355341085" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.943160459659044" cy="75.9241253374202" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.991616075242003" cy="78.26087196531633" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.873841069462404" cy="80.44883160564088" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.958841119289193" cy="82.63154126819697" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.03767952386284" cy="84.86381144424291" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="25.030047589623663" cy="86.96902150489454" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="24.952839619153977" cy="89.07678574114216" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.207660913452667" cy="25.40017705519625" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.336161422809916" cy="27.74320887896391" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.31309087870035" cy="29.818760606699144" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.301693655821428" cy="32.1342444767918" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.322911452661252" cy="34.20384380851288" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.106482151085068" cy="36.490869803569545" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.05477717417238" cy="38.486844840409" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.257121312473505" cy="40.76829741316318" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.071249044587862" cy="42.923717418154126" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.15043609786141" cy="45.15812139204444" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.11976966490173" cy="47.3509870820356" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.229964798833947" cy="49.59887251718068" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.05398779686953" cy="51.71401675703695" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.210635970425653" cy="54.084452805082776" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.266688749280025" cy="56.151251042322414" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.21356783554641" cy="58.469769889480695" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.063160727328547" cy="60.67484119316033" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.270348762469723" cy="62.790538330605244" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.202588699708627" cy="64.89550231297676" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.10953404055088" cy="67.12172064896384" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.075885070788022" cy="69.44757147362807" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.06567842212421" cy="71.72750894315212" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.29555444410241" cy="73.93875736253672" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.31371301172424" cy="76.11744949907988" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.187218011995395" cy="78.12198513721589" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.088919250859444" cy="80.25831372633436" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.11882522304172" cy="82.55043424003404" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.104211165383504" cy="84.71526973713988" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.17883040334547" cy="86.86959643049853" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="27.34305263710284" cy="89.14485774005131" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.48882358516335" cy="65.10654861183163" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.35011585730616" cy="67.33069756175252" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.455591179840216" cy="69.35917891188211" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.422929220159702" cy="71.51627103658404" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.547022469644542" cy="73.83986746713464" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.368366447026645" cy="75.99033829018693" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.265385293211768" cy="78.22825185141565" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.25559531470729" cy="80.52652153369073" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.458026960933985" cy="82.68570534011083" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.407993535065536" cy="84.68455696862294" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.5246994337473" cy="86.93123583322131" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="29.460699761736567" cy="89.09072944381076" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.57979409690316" cy="64.8888352495169" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.47513324102298" cy="67.18993969390046" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.63869142817043" cy="69.44788438658887" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.73322629321891" cy="71.4793372936431" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.52048623914006" cy="73.94777269770258" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.492359112509853" cy="75.91814559532689" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.55472879236495" cy="78.30247454534668" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.72610089706307" cy="80.42398157718966" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.57313520010284" cy="82.67130860645621" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.6451997887526" cy="84.66508858062612" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.503723456437097" cy="87.04274498771282" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="31.643621760189234" cy="89.32222484393418" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="33.76172763392317" cy="12.33275616852202" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="33.93469716174775" cy="14.337453303799242" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="33.809273261614834" cy="16.498542972451773" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="33.71466538973747" cy="18.747825247484265" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="33.89998172722399" cy="20.93265908872886" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="33.86888435018776" cy="23.060061586865782" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="33.9095778070635" cy="25.35138483663182" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="33.9470615613107" cy="27.583000954778438" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="36.02695930735134" cy="12.123667088614164" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="36.128506823918556" cy="14.382203606633226" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="35.94539268569842" cy="16.58535490885793" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="36.07778138726881" cy="18.79001976100022" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="36.07028492844437" cy="20.908446047821002" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="35.878110958937626" cy="23.18402817898052" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="35.93344731068189" cy="25.29446742000612" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="36.10736224020894" cy="27.741607198552046" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="38.178757452101166" cy="12.064912528401244" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="38.24907255019386" cy="14.452662775625194" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="38.07112643507902" cy="16.682078729427303" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="38.16604773760996" cy="18.83585662920597" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="38.0705995411376" cy="20.948428304915343" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="38.27006171103033" cy="23.291326478067887" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="38.082863783012414" cy="25.465550394053434" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="38.24219983926288" cy="27.645622140887067" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="40.48578456179341" cy="12.218942064136252" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="40.50370146240016" cy="14.371352671192653" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="40.381597252297276" cy="16.576541381556297" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="40.30960976306447" cy="18.830186785414107" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="40.370793318658265" cy="21.05774645972187" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="40.333088969741034" cy="23.19525725899082" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="40.44426859236316" cy="25.36372411649979" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="40.505533020372226" cy="27.498757474805846" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.59840007794832" cy="21.000955932970175" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.556047701437144" cy="23.268912579378213" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.55699349571853" cy="25.432195233880666" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.489232756991946" cy="27.47643829990835" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.53357282473213" cy="29.673269329252502" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.67089203369776" cy="32.129228411714635" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.52909215965827" cy="34.145615279203106" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.59508577925177" cy="36.53761456636548" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.54285829728932" cy="38.48300253445674" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.49675433146418" cy="40.831926000931155" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.675160529750016" cy="45.30901002691818" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.46275955532329" cy="47.5324726258808" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.510895069993715" cy="49.5029178009308" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.54179249076822" cy="51.70727743128859" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.64019017514134" cy="54.05461690060605" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.547292132664964" cy="56.1171294875141" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.63652962045453" cy="58.25908258974436" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.65353023236157" cy="60.67242221495321" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.725958954307046" cy="62.76845204414912" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.53149537089633" cy="64.8589978758437" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.45773984427653" cy="67.26369049131672" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.502342325302834" cy="69.51101833769592" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="42.717929284242445" cy="71.68131736211795" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.80734613763476" cy="21.01928530849343" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.78614162367366" cy="23.228034225640375" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.66332848341566" cy="25.259630939001553" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.872535559676166" cy="27.451356815054886" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.71143084963932" cy="29.718296659414104" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.77008175113829" cy="32.12163266176367" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.77007859402521" cy="34.2954855029746" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.813780683972034" cy="36.37177090707966" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.80604425170328" cy="38.47711777660614" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.863283042078876" cy="40.69067113941856" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.872913507583824" cy="45.18966346785031" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.72971834471331" cy="47.374210807712586" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.94564482420332" cy="49.725444872222305" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.76281451883197" cy="51.65188718387666" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.815424493876776" cy="54.002402971987266" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.744723307163405" cy="56.09655202751991" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.786661272076635" cy="58.49571400301763" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.89599774191947" cy="60.6426226297596" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.86680445788978" cy="62.74059873623318" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.81010895674922" cy="65.02508211069501" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.922260355635096" cy="67.07008869251034" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.91399414165037" cy="69.4828531493656" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="44.75717704807027" cy="71.66840119492679" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.941196146015486" cy="21.14779795818125" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.87640965884631" cy="23.304682301028052" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.966937540610544" cy="25.4859540076308" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.94684022883964" cy="27.619543861275027" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.85584191253488" cy="29.815370517403636" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="47.1317119682796" cy="31.89381571513268" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.95002966292684" cy="34.24814255650022" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.87273782794632" cy="36.51797089881643" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="47.01596095131595" cy="38.513309875763724" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="47.14695881628444" cy="40.84860020156623" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.990569022875185" cy="43.01021868748499" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="47.081489094154875" cy="45.22207955429657" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.919773422055464" cy="47.34124193133793" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="47.010328633362334" cy="49.51971404549456" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.9663858527355" cy="51.782266136036625" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="47.0225627953643" cy="53.951239332743384" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="47.057537663449594" cy="56.26982009551044" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.93872608794893" cy="58.37413986702977" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.959203913951725" cy="60.69337753454868" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.965917033620606" cy="62.92621820626758" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.911031705488064" cy="64.90635860826254" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.858109930150654" cy="67.07876536143728" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="46.90938216313451" cy="69.47418194094223" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="47.02013755932768" cy="71.66383185659636" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.16083918320014" cy="20.87510666756047" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.06990872800299" cy="23.243319348691884" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.28670838633397" cy="25.41865835522106" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.19727692428335" cy="27.61555049561626" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.094230369556" cy="29.709970621042043" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.26993569364953" cy="31.903455270792595" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.19778939316903" cy="34.192722159828655" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.170476485443984" cy="36.28819613403832" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.15587074617291" cy="38.636781218247386" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.123223341865156" cy="40.70079787328142" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.098366782691926" cy="42.94606930110072" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.16664339507059" cy="45.08704978476496" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.31863699572136" cy="47.54019553614956" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.084908092495404" cy="49.66530029421212" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.23743501817689" cy="51.81401268643937" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.061889870760616" cy="53.944922530071885" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.32766638909444" cy="56.07834285065787" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.24345204836531" cy="58.519468644034006" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.17883936898545" cy="60.614179623691385" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.23687559945666" cy="62.727024882132234" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.098859956008404" cy="65.13032102420632" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.25674470481957" cy="67.15496086151559" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.1410225729349" cy="69.48709656907477" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.17168791219331" cy="71.6276814685396" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.079602692301066" cy="73.70441209878496" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="49.130538500038334" cy="76.05168253530537" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.3062459475755" cy="21.132848290707628" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.5400832594877" cy="23.102725891581578" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.3618287741178" cy="25.43008030672568" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.32666221733607" cy="27.45036905750871" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.5453033004986" cy="29.767935646197127" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.484058730527" cy="32.04314402011996" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.450692022917025" cy="34.237627301390354" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.5309095390877" cy="36.38994092830584" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.33557982112607" cy="38.5184940124175" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.54823971846426" cy="40.65693872302699" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.296322424725595" cy="42.968288253388764" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.526724767493846" cy="45.33886716712549" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.42355091417149" cy="47.54723054319943" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.403972243408525" cy="49.685481670175406" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.29162618768749" cy="51.75505533198639" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.516597077222684" cy="53.95845697480125" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.255417040378404" cy="56.32885692108731" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.429260189137615" cy="58.2566263204476" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.529364960501944" cy="60.70317907119509" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.3822616768161" cy="62.88820210693976" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.28823801012375" cy="65.00764058737691" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.35864409071108" cy="67.25466966593892" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.350439035506156" cy="69.49403234394494" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.320775404239114" cy="71.50239619322417" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.51412029360941" cy="73.74412170560339" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="51.46744132337279" cy="76.07288113463966" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.47015014842413" cy="25.54047577014846" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.68757320067859" cy="27.50082378086913" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.60392297064542" cy="29.74424162985297" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.59286295282767" cy="31.99796551252895" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.472064280164325" cy="34.30430795230375" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.74963526322657" cy="36.44612396353444" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.50835376638555" cy="38.70541112448854" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.663403171794556" cy="40.72400953802298" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.599466706650915" cy="42.96067509233036" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.45864558561866" cy="45.19657660898827" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.47648232144125" cy="47.25204335924546" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.49040031907859" cy="49.47578003598811" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.58011719535445" cy="51.7317133930385" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.5488558337106" cy="54.09515171204189" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.618042757003096" cy="56.19434602032044" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.669874484108874" cy="58.39495885021796" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.68505012646822" cy="60.67650310694992" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.60893686683648" cy="62.688587378147346" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.65070874143714" cy="64.98421598789005" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.703990641261164" cy="67.17356354044162" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.52504294004299" cy="69.33642592608649" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.541005822464975" cy="71.58349928456025" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.63005996994516" cy="73.77639247422891" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="53.716009976615695" cy="75.98598284904392" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.86515983249736" cy="25.48031569108993" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.71217965448137" cy="27.54294825682895" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.90407699729295" cy="29.737654617474124" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.88565359879281" cy="32.03410582136424" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.683228518489095" cy="34.11169904218573" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.72790997859881" cy="36.54621447563154" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.8223778564049" cy="38.46820463603959" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.876049860275785" cy="40.68385929723759" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.71321823960771" cy="43.13417638987046" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.65151844284318" cy="45.2490449932664" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.653090489559695" cy="47.41402665857111" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.696268153856735" cy="49.746181048062915" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.76373057895689" cy="51.91962249906706" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.94380590413087" cy="54.04949310170198" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.78369230357084" cy="56.20693083788218" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.826881975584044" cy="58.29634271051905" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.84137991333192" cy="60.65960468706591" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.693104174374064" cy="62.909799535806094" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.94908667956815" cy="65.03045707463367" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.73391266582815" cy="67.14157534974883" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.65855352889139" cy="69.45906159958147" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.86934958480928" cy="71.59754679842749" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.71646916354182" cy="73.94235524843985" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="55.813108246944054" cy="76.02999953441096" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.86764518003671" cy="29.780347705687355" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.99149841892686" cy="32.12065230538322" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.01490464650471" cy="34.15487516648695" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.8852596472452" cy="36.37070629469968" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.077981810697054" cy="38.64628427754438" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.93694936364023" cy="40.71733113202441" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.89669487297601" cy="43.11460681212911" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.02093578242958" cy="45.343993589819476" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.04381709471828" cy="47.513515286296446" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.12102678999691" cy="49.62494948568673" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.88505176679919" cy="51.77797816482655" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.87913841855223" cy="53.8809344061752" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.02185533851315" cy="56.144474349498275" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.00412286724332" cy="58.537231371620834" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.86860102645017" cy="60.55774631164956" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.111618204358926" cy="62.906951668491324" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.056049015958294" cy="64.95485253866312" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="58.127206166892506" cy="67.28186470468805" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="57.959744960641146" cy="69.31929399911006" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.149570521912324" cy="29.83777404497613" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.33580659361521" cy="32.068071554923705" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.26697447262628" cy="34.28255401824618" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.347270152770676" cy="36.33150925424747" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.202556796285656" cy="38.62137354592781" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.130891906978704" cy="40.657161182445066" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.102556835636506" cy="42.97634019082666" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.07249271705765" cy="45.107173125884756" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.180980636640115" cy="47.293720082704745" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.14504443833836" cy="49.68769387197971" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.205410980499366" cy="51.72562722266864" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.32714692897214" cy="53.94696710005694" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.21916649151496" cy="56.136702158843455" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.279400648066186" cy="58.45944849080985" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.18512814265601" cy="60.63683102277767" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.1506058360816" cy="62.93378952279393" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.27719594541494" cy="64.93515706104775" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.188582643046765" cy="67.08529929883773" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="60.263412568473505" cy="69.4816695740317" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.3623799823664" cy="23.219098688520514" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.42948359114698" cy="25.31225860573835" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.26196549726974" cy="27.74258867086732" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.48200997651863" cy="29.88793861827346" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.41684618735956" cy="31.944009301000914" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.342119809910095" cy="34.13328875124882" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.542446649206966" cy="36.4937935884553" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.41601894471959" cy="38.46140701639847" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.421980527511124" cy="40.762860343914596" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.33233843539534" cy="43.0639595874178" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.459259215381024" cy="45.22836230913582" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.32020148032759" cy="47.493922512322314" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.33452554958129" cy="49.66703556467852" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.28004082694268" cy="51.90000571341823" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="62.365129622974415" cy="53.96859905387443" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="64.49697843061088" cy="23.142688183298933" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="64.48780719909043" cy="25.33753232734276" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="64.46310023191903" cy="27.465864684460453" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="64.66034682192966" cy="29.793778881514555" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                    <circle cx="64.46161767650194" cy="32.05401508075365" r="0.35" fill="#3ba1df"
                                            opacity="0.18"></circle>
                                            <circle cx="64.56586176463746" cy="34.16299956312002" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.5412277021007" cy="36.43255381678082" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.68837597889056" cy="38.628357329495906" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.58034214746793" cy="40.89033845055076" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.51650877374131" cy="43.01966631788086" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.53370785207863" cy="45.10630792570757" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.54817773543412" cy="47.433084028889375" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.68932880069339" cy="49.50307604376689" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.69134275073668" cy="51.77320915919052" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="64.64650735932058" cy="54.052660949822545" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="66.73807339995521" cy="23.149297035040604" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="66.90057070731089" cy="25.408408977562164" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="66.84095325882545" cy="27.61622705462986" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="66.67412696546818" cy="29.81400760315763" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.72739017640752" cy="31.852973791332953" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.67121969556273" cy="34.127158970633516" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.70169614715917" cy="36.53743759398659" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.70062914966064" cy="38.74789184763554" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.91893894413919" cy="40.74883148283322" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.70271771822158" cy="42.86705874736775" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.7636913835226" cy="45.118591562271575" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.74322999427415" cy="47.32442504901211" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.89958176989508" cy="49.721888462949835" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.68752664593764" cy="51.869117083730806" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="66.91034708984209" cy="54.07855627389189" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="68.96598224073234" cy="23.33741252422762" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="69.02061567316451" cy="25.336173311509242" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="69.05494444943946" cy="27.681510271169135" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="69.00354278861865" cy="29.927005594088016" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="69.01114647836822" cy="32.0093446057039" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="68.92519139108252" cy="34.22280205405706" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="69.08042233806064" cy="36.37496162278496" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="68.9022525193173" cy="38.73590914708799" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="68.87833322980809" cy="40.89600143530255" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="68.89105011467544" cy="43.14809676883822" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="68.89275332863167" cy="45.23379709566419" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="69.05290473928866" cy="47.4836178189542" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="69.10120578831051" cy="49.483052327033306" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="68.90341702062587" cy="51.91058626914967" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="69.03718990950243" cy="54.083293292953925" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.34862481700338" cy="18.732287631135993" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.18778231919651" cy="21.074555598586056" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.23852242806525" cy="23.177689190470876" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.12696790191318" cy="25.29306351616568" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.25691497123344" cy="27.599082816316887" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.32217873040874" cy="29.70087924939017" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.253713027931" cy="31.895821835055578" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.28541785852902" cy="34.21023079108633" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.1760526775545" cy="36.43613642472705" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.3157320103817" cy="38.74284861469981" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.24049905063636" cy="40.87739192825459" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.31525805366051" cy="43.0460729293995" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.31910303069675" cy="45.09708721325292" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.0578672154857" cy="47.47803469207077" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.07616842389628" cy="49.61963587035637" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.12345673687634" cy="51.84859204370264" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="71.05834387332091" cy="54.04038790887257" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.45224248325029" cy="18.80550022770399" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.41840555851103" cy="20.917709190505366" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.3892568608919" cy="23.333821028716148" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.50727025124033" cy="25.44325594392245" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.47230234429084" cy="27.476379632562814" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.54659676455731" cy="29.750726838929317" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.36348355375037" cy="31.99835508011151" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.36347484819184" cy="34.17595430704482" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.45807831337144" cy="36.35195025780604" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.47211308841067" cy="38.47232394244197" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.37970233088357" cy="40.87286072828036" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.41512562859398" cy="43.040629780860066" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.52945037527782" cy="45.22725306129073" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.25411048151261" cy="47.36205375021565" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.27933041995979" cy="49.65007712558283" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.47726131905046" cy="51.79767554811102" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.38187636112127" cy="54.04368043293755" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.4016613754634" cy="56.33870299687121" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.50250432375935" cy="58.42332677158606" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="73.48610635069488" cy="60.56322295548656" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.45585946635175" cy="18.70781539264792" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.47557511462756" cy="21.10581582644245" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.56452491097214" cy="23.17311424795329" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.73346342304592" cy="25.499213274739272" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.50426685449487" cy="27.74479979155205" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.68737693647645" cy="29.78682519966847" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.58356504033601" cy="31.87974859585494" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.59685463805084" cy="34.31949704319681" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.47877447233154" cy="36.39535898344665" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.54218005349439" cy="38.48731856940599" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.67715267149542" cy="40.714252992929794" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.58386229349738" cy="42.94245889026134" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.74934068552714" cy="45.18978612044635" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.51212619278382" cy="47.54846492721802" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.68772844033285" cy="49.560322719908996" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.73112865289701" cy="51.80963693200744" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.45176330302492" cy="54.10857598529819" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.577391747045" cy="56.165171079832966" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.5104392972771" cy="58.39872038644106" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="75.62080624314483" cy="60.70947118062938" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.94062527175976" cy="18.760221116505605" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.70495964189647" cy="20.85149448850637" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.88199463052591" cy="23.279588043789506" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.86199201396022" cy="25.35530675922676" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.74616833087256" cy="27.706243358767747" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.85688679776337" cy="29.671118292720262" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.89241828094332" cy="32.136073359433865" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.9391077657951" cy="34.172422799647784" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.7946604786447" cy="36.52661561361526" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.94072297110003" cy="38.71730269529546" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.85423722372902" cy="40.74600282195484" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.92599634936182" cy="42.90730047929542" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.6926999766707" cy="45.14531731715501" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="77.83372214214748" cy="47.35926912581644" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.68651285394714" cy="49.71695576131308" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.80713043015146" cy="51.72793134596004" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.67625791793971" cy="53.968231184828994" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.85083163228877" cy="56.24781278603777" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.94046266636293" cy="58.499234490696395" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="77.66511311900742" cy="60.73671821915675" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.86175902385936" cy="18.910233824609467" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.05657696578437" cy="21.06311775536121" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.93648360398795" cy="23.234819044039202" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.05217223419262" cy="25.50045873574617" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.9145510153083" cy="27.459464470891927" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.10299875861581" cy="29.795085382274138" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="79.9962721998118" cy="32.0193167485965" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.93147316027094" cy="34.11830561501953" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.87499714650454" cy="36.47228856894031" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.9001012845475" cy="38.6406565042273" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.88047023835529" cy="40.78615726220251" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.97693296868154" cy="43.07633580811977" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.8866522684947" cy="45.184217128254666" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.96295764005454" cy="47.3821981604701" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.02174100249982" cy="49.604413177350914" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.01375348891267" cy="51.797493760889516" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.07517088214202" cy="53.948229823050916" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.06481494890286" cy="56.22406496465463" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.97422561542285" cy="58.43101985929078" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.96133062148556" cy="60.581754070350584" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.94314374059226" cy="69.49255691544424" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.98220979897705" cy="71.52749103451048" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="79.91684860919105" cy="73.78510806994181" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.11466840842304" cy="75.87534523298473" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.0611619650675" cy="78.09404829270541" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.10328451645283" cy="80.49341067859844" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.01865049119307" cy="82.72972042357922" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="80.13532834081548" cy="84.76536333430786" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.10161711830112" cy="18.783345474649533" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.29064354926582" cy="20.871328038985702" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.12704992348125" cy="23.065223865987452" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.14908099892203" cy="25.33489946128894" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.30195373689764" cy="27.562854277657525" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.15316473053278" cy="29.945962201822457" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.25157708779763" cy="32.14242187634503" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.06407813706817" cy="34.12997893852952" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.05585748777705" cy="36.36205079692406" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.16576614276242" cy="38.59315806296613" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.17420608503095" cy="40.857470968754015" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.09598055030452" cy="43.016535392711795" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.1150258418785" cy="45.27125349457431" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.15186810604368" cy="47.272876215138126" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.26731253790483" cy="49.512248762668285" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.27732816726407" cy="51.87485971334115" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.20041736939866" cy="54.028052264163414" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.27823406750537" cy="56.31476345176716" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.34750412860882" cy="58.27430735752179" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.11794187913823" cy="60.51563940978744" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.29369713116078" cy="69.38018262060969" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.18572239194427" cy="71.50919123135907" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.06952806565363" cy="73.91600589377698" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.21586745605453" cy="75.94428305689797" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.1646823839831" cy="78.22613724885547" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.18307459009102" cy="80.52977360312603" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.23893061827047" cy="82.62053040997456" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="82.23429112430351" cy="84.65497131242884" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.37011547109306" cy="18.836170552958198" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.35457354058023" cy="21.094085180854943" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.26315761322162" cy="23.070595049162225" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.27846524854112" cy="25.48358894272659" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.43226651239728" cy="27.52872084318137" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.28437560000809" cy="29.764597754502436" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.38568541038528" cy="31.93348597766974" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.35805301909589" cy="34.05884293277502" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.51598571726839" cy="36.47796698234249" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.51116129113866" cy="38.74458094942211" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.48153494646893" cy="40.76811650578106" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.25302327583036" cy="42.99259846604764" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.36638001485407" cy="45.16603638650071" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.43971425767174" cy="47.357165341561334" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.47516025319847" cy="49.687600073861404" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.40437040958281" cy="51.70004524781175" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.45206142502795" cy="53.98808989825886" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.43565767543109" cy="56.050766723914585" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.42917741926153" cy="58.39050541372433" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.27195624731874" cy="60.52619359508371" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.30145925316563" cy="69.39819010187354" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.25418457924752" cy="71.63918703381324" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.52073878856038" cy="73.66316016599711" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.29958381546156" cy="75.99323656345064" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.39724107334108" cy="78.05581038032882" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.34396765862519" cy="80.47683232112865" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.3843752247274" cy="82.51553945168253" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="84.50084223656201" cy="84.68022754627074" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.56791724408718" cy="18.66870584100635" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.64764343539481" cy="20.973873471615615" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="86.62400114896337" cy="23.09730304499175" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.61999053984148" cy="25.37016958000366" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.7404091673602" cy="27.658183081536126" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.68652917370933" cy="29.76919133121203" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.54341985752431" cy="31.92972916449026" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.59668619994075" cy="34.08073068149755" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.72855650563997" cy="36.44201545013954" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.49753548354873" cy="38.6988605401503" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.49606867383899" cy="40.675686988675345" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="86.61736291798783" cy="43.14797412678024" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.61604486288103" cy="53.99103326723535" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.61197103406545" cy="56.1807142597367" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.60802579948266" cy="58.51640322704687" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.7334776418418" cy="60.66064226351271" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.6358679421355" cy="69.4442526052105" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            <circle cx="86.69194269979664" cy="71.68683688811865" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.63414650091512" cy="73.88800739164296" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.56047086221082" cy="76.06581781017567" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.7435405388954" cy="78.12525845738458" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.72734662942531" cy="80.36806816873377" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="86.5942869670851" cy="82.74822073320018" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="86.49222574388088" cy="84.65636158736328" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.70727967091162" cy="18.925581772945122" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.80179219482999" cy="21.114289666904437" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.69984111951604" cy="23.22336032179421" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.77345643042845" cy="25.363001548080206" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.8007469875432" cy="27.630572336056996" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="88.72160664190281" cy="29.662739512675593" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.7661487991965" cy="32.08820179514223" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.80794784445085" cy="34.256137311936044" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.78338937785965" cy="36.499577365237734" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.86487957217486" cy="38.72453710695556" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.71227667363033" cy="40.85221994109771" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="88.94632603603732" cy="43.049011034491414" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.71756983505246" cy="73.84055253453468" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.84811102451447" cy="75.86033276345594" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.76948222036175" cy="78.08118408598096" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.89468071257807" cy="80.33537003959975" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="88.90319381206862" cy="82.50890469582926" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="88.71768256282712" cy="84.81493563017435" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.99034812069634" cy="18.89986123139175" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="91.10473942999826" cy="20.95480164365451" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.9374213021707" cy="23.326738276753535" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.95987534173803" cy="25.371462192104083" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.88291807363508" cy="27.705902401994685" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.94400590764998" cy="29.81304726784916" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="91.14521251632644" cy="32.03351490625285" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.94185523771195" cy="34.296298550049684" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.92856838408666" cy="36.34408474449947" r="0.35" fill="#3ba1df" opacity="0.18"></circle>
                                            
                                            <circle cx="90.85077179383248" cy="38.45241122288021" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.95584578490154" cy="40.94421896824691" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="91.0183074387077" cy="42.993860107047794" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="91.09240883761748" cy="73.80126937483072" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="91.12672378184426" cy="76.0746681509041" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="91.02799234643666" cy="78.0900357165382" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="91.11762519657226" cy="80.31222250378167" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="91.14943275232959" cy="82.70706616878327" r="0.35" fill="#3ba1df" opacity="0.18"></circle><circle cx="90.90092550322663" cy="84.66101760622006" r="0.35" fill="#3ba1df" opacity="0.18"></circle></g>
                                            
                                            
                                            
                                            
                                            <g><path d="M22,35 Q33.5,21.989592359914347 45,28" fill="none" stroke="#3ba1df" strokeWidth="0.15" opacity="0.35" strokeLinecap="round"></path><path d="M45,28 Q51.5,23.2237567063643 58,42" fill="none" stroke="#3ba1df" strokeWidth="0.15" opacity="0.35" strokeLinecap="round"></path><path d="M58,42 Q66.5,36.64976636024183 75,55" fill="none" stroke="#3ba1df" strokeWidth="0.15" opacity="0.35" strokeLinecap="round"></path><path d="M22,35 Q48.5,20.837990961731453 75,55" fill="none" stroke="#3ba1df" strokeWidth="0.15" opacity="0.35" strokeLinecap="round"></path></g>
                                            
                                            
                                            <g><g>
                                                
                                                <circle cx="22" cy="35" r="0.9" fill="#3ba1df" opacity="0.25"></circle>
                                                <circle cx="22" cy="35" r="0.45" fill="#3ba1df" filter="url(#nodeGlow)"></circle>
                                                <circle cx="22" cy="35" r="0.2" fill="white" opacity="0.9"></circle></g>
                                                <g><circle cx="45" cy="28" r="0.9" fill="#3ba1df" opacity="0.25"></circle>
                                                <circle cx="45" cy="28" r="0.45" fill="#3ba1df" filter="url(#nodeGlow)"></circle>
                                                <circle cx="45" cy="28" r="0.2" fill="white" opacity="0.9"></circle></g>
                                            
                                            
                                            
                                            
                                            <g>
                                                <circle cx="58" cy="42" r="2.5" fill="none" stroke="#3ba1df" strokeWidth="0.1" opacity="0.4" className="animate-ping" style={{ transformOrigin: '58% 42%' }}></circle>

                                                        <circle cx="58" cy="42" r="1.8" fill="#3ba1df" opacity="0.15"></circle>
                                                        <circle cx="58" cy="42" r="1.2" fill="#3ba1df" opacity="0.4"></circle>
                                                        <circle cx="58" cy="42" r="0.6" fill="#3ba1df" filter="url(#pulseGlow)"></circle>
                                                        <circle cx="58" cy="42" r="0.2" fill="white" opacity="0.9"></circle>
                                                        </g>
                                                        
                                                        <g><circle cx="75" cy="55" r="0.9" fill="#3ba1df" opacity="0.25"></circle>
                                                        <circle cx="75" cy="55" r="0.45" fill="#3ba1df" filter="url(#nodeGlow)"></circle>
                                                        <circle cx="75" cy="55" r="0.2" fill="white" opacity="0.9"></circle>
                                                        </g>
                                                        </g>



                           
                        </svg>

                        {/* City data cards - positioned absolutely */}

                        {/* London Card */}
                        <div className="absolute" style={{ left: '23%', top: '20%' }}>
                            <DataCard
                                city="London"
                                yield="4.1%"
                                change="+1.2%"
                                opacity="medium"
                            />
                        </div>

                        {/* Dubai Card (highlighted) */}
                        <div className="absolute" style={{ left: '55%', top: '35%' }}>
                            <DataCard
                                city="Dubai"
                                yield="6.8%"
                                change="+1.5%"
                                highlighted
                            />
                        </div>

                        {/* Singapore Card */}
                        <div className="absolute" style={{ left: '75%', top: '52%' }}>
                            <DataCard
                                city="Singapore"
                                yield="5.2%"
                                change="+0.8%"
                                opacity="medium"
                            />
                        </div>

                        {/* Glow effects */}
                        <div className="absolute top-1/3 left-[45%] w-48 h-48 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-sky-500/8 rounded-full blur-[80px] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Data Card Component
const DataCard = ({ city, yield: yieldValue, change, highlighted = false, opacity = 'full' }) => {
    const opacityClass = opacity === 'medium' ? 'opacity-70 scale-[0.92]' : 'scale-100';
    const bgClass = highlighted
        ? 'bg-[#0d1b3a]/95 border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.25)]'
        : 'bg-[#0d1b3a]/80 border-sky-500/30';

    const textColorClass = highlighted ? 'text-white' : 'text-gray-300';
    const yieldColorClass = highlighted ? 'text-sky-400' : 'text-sky-500/70';

    return (
        <div className={`relative transition-all duration-300 ${opacityClass}`}>
            {/* Connecting line */}
            <svg
                className="absolute pointer-events-none"
                style={{
                    left: '50%',
                    top: '100%',
                    width: '2px',
                    height: highlighted ? '70px' : '55px',
                    transform: 'translateX(-50%)'
                }}
            >
                <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="100%"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    opacity={highlighted ? "0.6" : "0.3"}
                />
            </svg>

            {/* Card */}
            <div
                className={`backdrop-blur-md rounded-xl px-5 py-3.5 border-2 ${bgClass} min-w-[180px]`}
                style={{ backdropFilter: 'blur(16px)' }}
            >
                {/* City name */}
                <div className="flex items-center gap-2 mb-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        highlighted ? 'bg-sky-400/20' : 'bg-sky-500/10'
                    }`}>
                        <MapPin className={`w-3 h-3 ${
                            highlighted ? 'text-sky-400' : 'text-sky-500/60'
                        }`} />
                    </div>
                    <span className={`text-base font-bold tracking-wide ${textColorClass}`}>
                        {city}
                    </span>
                </div>

                {/* Yield data */}
                <div className="space-y-1">
                    <div className={`text-3xl font-bold leading-none ${yieldColorClass}`}>
                        {yieldValue}
                    </div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider font-medium">
                        Gross Yield
                    </p>
                </div>

                {/* Change badge */}
                <div className="mt-2.5">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${
                        highlighted
                            ? 'bg-green-500/15 border border-green-400/30'
                            : 'bg-green-500/10 border border-green-500/20'
                    }`}>
                        <TrendingUp className={`w-3.5 h-3.5 ${
                            highlighted ? 'text-green-400' : 'text-green-500/70'
                        }`} />
                        <span className={`text-sm font-semibold ${
                            highlighted ? 'text-green-400' : 'text-green-500/70'
                        }`}>
                            {change}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;