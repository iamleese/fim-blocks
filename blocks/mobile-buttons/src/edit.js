/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';


/**
 * Font Awesome
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook,faAddressCard,faAnchor,faAngleDoubleDown,faAngleDoubleLeft,faAngleDoubleRight,faAngleDoubleUp,faAngleDown,faAngleLeft,faAngleRight,faAngleUp,faAppleAlt,faArchive,faArrowAltCircleDown,faArrowAltCircleLeft,faArrowAltCircleRight,faArrowAltCircleUp,faArrowCircleDown,faArrowCircleLeft,faArrowCircleRight,faArrowCircleUp,faArrowDown,faArrowLeft,faArrowRight,faArrowUp,faArrowsAlt,faArrowsAltH,faArrowsAltV,faAsterisk,faAt,faAtom,faAward,faBalanceScale,faBars,faBaseballBall,faBasketballBall,faBell,faBible,faBolt,faBook,faBookOpen,faBookReader,faBookmark,faBox,faBoxOpen,faBoxes,faBuilding,faBullhorn,faBullseye,faCalculator,faCalendar,faCalendarAlt,faCamera,faCameraRetro,faCaretDown,faCaretLeft,faCaretRight,faCaretSquareDown,faCaretSquareLeft,faCaretSquareRight,faCaretSquareUp,faCaretUp,faCertificate,faChalkboard,faChalkboardTeacher,faChartArea,faChartBar,faChartLine,faChartPie,faCheck,faCheckCircle,faCheckDouble,faCheckSquare,faChevronCircleDown,faChevronCircleLeft,faChevronCircleRight,faChevronCircleUp,faChevronDown,faChevronLeft,faChevronRight,faChevronUp,faChild,faChurch,faCircle,faCity,faClipboard,faClipboardCheck,faClipboardList,faClock,faCloud,faCode,faCoffee,faCog,faCogs,faCoins,faComment,faCommentAlt,faComments,faCompass,faCompress,faCompressAlt,faCompressArrowsAlt,faConciergeBell,faCross,faCrown,faCube,faCubes,faDesktop,faDirections,faDna,faDollarSign,faDonate,faDoorClosed,faDoorOpen,faDotCircle,faDove,faEdit,faEgg,faEnvelope,faEnvelopeOpen,faEnvelopeOpenText,faEnvelopeSquare,faExclamation,faExclamationCircle,faExclamationTriangle,faExternalLinkSquareAlt,faFax,faFeather,faFeatherAlt,faFemale,faFile,faFileAlt,faFilm,faFingerprint,faFire,faFireAlt,faFlag,faFlagCheckered,faFlagUsa,faFolder,faFolderOpen,faGavel,faGift,faGifts,faGlasses,faGlobe,faGlobeAmericas,faGraduationCap,faGrin,faGrinAlt,faGripHorizontal,faGuitar,faHSquare,faHandHolding,faHandHoldingHeart,faHandHoldingUsd,faHandPeace,faHandPointDown,faHandPointLeft,faHandPointRight,faHandPointUp,faHandPointer,faHands,faHandsHelping,faHandshake,faHashtag,faHeart,faHeartbeat,faHome,faHourglass,faInfo,faInfoCircle,faKey,faKeyboard,faLanguage,faLaptop,faLaptopCode,faLaugh,faLaughBeam,faLaughSquint,faLaughWink,faLeaf,faLifeRing,faLightbulb,faLink,faLiraSign,faList,faListAlt,faListOl,faListUl,faLocationArrow,faLock,faLockOpen,faMagnet,faMailBulk,faMale,faMap,faMapMarked,faMapMarkedAlt,faMapMarker,faMapMarkerAlt,faMapPin,faMapSigns,faMarker,faMedal,faMemory,faMicrophone,faMicrophoneAlt,faMicroscope,faMinus,faMinusCircle,faMinusSquare,faMobile,faMobileAlt,faMoneyBill,faMoneyBillAlt,faMoneyBillWave,faMoneyBillWaveAlt,faMoneyCheck,faMoneyCheckAlt,faMoon,faMountain,faMouse,faMousePointer,faMugHot,faMusic,faNetworkWired,faNeuter,faNewspaper,faPaperPlane,faPaperclip,faPause,faPauseCircle,faPeace,faPen,faPenAlt,faPenFancy,faPenNib,faPenSquare,faPencilAlt,faPencilRuler,faPercent,faPercentage,faPhone,faPhoneAlt,faPhoneSquare,faPhoneSquareAlt,faPhoneVolume,faPhotoVideo,faPiggyBank,faPizzaSlice,faPlaceOfWorship,faPlane,faPlay,faPlayCircle,faPlug,faPlus,faPlusCircle,faPlusSquare,faPodcast,faPoll,faPollH,faPortrait,faPowerOff,faPray,faPrayingHands,faPrint,faProjectDiagram,faPuzzlePiece,faQuestion,faQuestionCircle,faQuoteLeft,faQuoteRight,faRecordVinyl,faRegistered,faRibbon,faRing,faRoad,faRoute,faRss,faRssSquare,faSearch,faSeedling,faShapes,faShare,faShieldAlt,faShoppingBag,faShoppingBasket,faShoppingCart,faSign,faSignal,faSignature,faSitemap,faSmile,faSmileBeam,faSmileWink,faSms,faSquare,faSquareFull,faStar,faStickyNote,faStop,faStopCircle,faStopwatch,faStore,faStoreAlt,faStream,faStreetView,faStrikethrough,faSuitcase,faSuitcaseRolling,faSun,faSurprise,faSwimmer,faSync,faSyncAlt,faTableTennis,faTablet,faTabletAlt,faTag,faTags,faTape,faTasks,faTh,faThLarge,faThList,faTheaterMasks,faThumbsUp,faThumbtack,faTicketAlt,faTimes,faTimesCircle,faToolbox,faTools,faTrafficLight,faTrash,faTrashAlt,faTree,faTrophy,faTshirt,faTv,faUmbrella,faUmbrellaBeach,faUnderline,faUndo,faUndoAlt,faUniversalAccess,faUniversity,faUnlink,faUnlock,faUnlockAlt,faUpload,faUser,faUserAlt,faUserAltSlash,faUserCheck,faUserCircle,faUserClock,faUserCog,faUserEdit,faUserFriends,faUserGraduate,faUserMinus,faUserTie,faUserTimes,faUsers,faUsersCog,faUtensilSpoon,faUtensils,faVectorSquare,faVideo,faVideoSlash,faVolumeDown,faVolumeMute,faVolumeOff,faVolumeUp,faVoteYea,faWalking,faWallet,faWarehouse,faWater,faWaveSquare,faWeightHanging,faWifi,faWind,faWrench } from '@fortawesome/free-solid-svg-icons';
library.add(faAddressBook,faAddressCard,faAnchor,faAngleDoubleDown,faAngleDoubleLeft,faAngleDoubleRight,faAngleDoubleUp,faAngleDown,faAngleLeft,faAngleRight,faAngleUp,faAppleAlt,faArchive,faArrowAltCircleDown,faArrowAltCircleLeft,faArrowAltCircleRight,faArrowAltCircleUp,faArrowCircleDown,faArrowCircleLeft,faArrowCircleRight,faArrowCircleUp,faArrowDown,faArrowLeft,faArrowRight,faArrowUp,faArrowsAlt,faArrowsAltH,faArrowsAltV,faAsterisk,faAt,faAtom,faAward,faBalanceScale,faBars,faBaseballBall,faBasketballBall,faBell,faBible,faBolt,faBook,faBookOpen,faBookReader,faBookmark,faBox,faBoxOpen,faBoxes,faBuilding,faBullhorn,faBullseye,faCalculator,faCalendar,faCalendarAlt,faCamera,faCameraRetro,faCaretDown,faCaretLeft,faCaretRight,faCaretSquareDown,faCaretSquareLeft,faCaretSquareRight,faCaretSquareUp,faCaretUp,faCertificate,faChalkboard,faChalkboardTeacher,faChartArea,faChartBar,faChartLine,faChartPie,faCheck,faCheckCircle,faCheckDouble,faCheckSquare,faChevronCircleDown,faChevronCircleLeft,faChevronCircleRight,faChevronCircleUp,faChevronDown,faChevronLeft,faChevronRight,faChevronUp,faChild,faChurch,faCircle,faCity,faClipboard,faClipboardCheck,faClipboardList,faClock,faCloud,faCode,faCoffee,faCog,faCogs,faCoins,faComment,faCommentAlt,faComments,faCompass,faCompress,faCompressAlt,faCompressArrowsAlt,faConciergeBell,faCross,faCrown,faCube,faCubes,faDesktop,faDirections,faDna,faDollarSign,faDonate,faDoorClosed,faDoorOpen,faDotCircle,faDove,faEdit,faEgg,faEnvelope,faEnvelopeOpen,faEnvelopeOpenText,faEnvelopeSquare,faExclamation,faExclamationCircle,faExclamationTriangle,faExternalLinkSquareAlt,faFax,faFeather,faFeatherAlt,faFemale,faFile,faFileAlt,faFilm,faFingerprint,faFire,faFireAlt,faFlag,faFlagCheckered,faFlagUsa,faFolder,faFolderOpen,faGavel,faGift,faGifts,faGlasses,faGlobe,faGlobeAmericas,faGraduationCap,faGrin,faGrinAlt,faGripHorizontal,faGuitar,faHSquare,faHandHolding,faHandHoldingHeart,faHandHoldingUsd,faHandPeace,faHandPointDown,faHandPointLeft,faHandPointRight,faHandPointUp,faHandPointer,faHands,faHandsHelping,faHandshake,faHashtag,faHeart,faHeartbeat,faHome,faHourglass,faInfo,faInfoCircle,faKey,faKeyboard,faLanguage,faLaptop,faLaptopCode,faLaugh,faLaughBeam,faLaughSquint,faLaughWink,faLeaf,faLifeRing,faLightbulb,faLink,faLiraSign,faList,faListAlt,faListOl,faListUl,faLocationArrow,faLock,faLockOpen,faMagnet,faMailBulk,faMale,faMap,faMapMarked,faMapMarkedAlt,faMapMarker,faMapMarkerAlt,faMapPin,faMapSigns,faMarker,faMedal,faMemory,faMicrophone,faMicrophoneAlt,faMicroscope,faMinus,faMinusCircle,faMinusSquare,faMobile,faMobileAlt,faMoneyBill,faMoneyBillAlt,faMoneyBillWave,faMoneyBillWaveAlt,faMoneyCheck,faMoneyCheckAlt,faMoon,faMountain,faMouse,faMousePointer,faMugHot,faMusic,faNetworkWired,faNeuter,faNewspaper,faPaperPlane,faPaperclip,faPause,faPauseCircle,faPeace,faPen,faPenAlt,faPenFancy,faPenNib,faPenSquare,faPencilAlt,faPencilRuler,faPercent,faPercentage,faPhone,faPhoneAlt,faPhoneSquare,faPhoneSquareAlt,faPhoneVolume,faPhotoVideo,faPiggyBank,faPizzaSlice,faPlaceOfWorship,faPlane,faPlay,faPlayCircle,faPlug,faPlus,faPlusCircle,faPlusSquare,faPodcast,faPoll,faPollH,faPortrait,faPowerOff,faPray,faPrayingHands,faPrint,faProjectDiagram,faPuzzlePiece,faQuestion,faQuestionCircle,faQuoteLeft,faQuoteRight,faRecordVinyl,faRegistered,faRibbon,faRing,faRoad,faRoute,faRss,faRssSquare,faSearch,faSeedling,faShapes,faShare,faShieldAlt,faShoppingBag,faShoppingBasket,faShoppingCart,faSign,faSignal,faSignature,faSitemap,faSmile,faSmileBeam,faSmileWink,faSms,faSquare,faSquareFull,faStar,faStickyNote,faStop,faStopCircle,faStopwatch,faStore,faStoreAlt,faStream,faStreetView,faStrikethrough,faSuitcase,faSuitcaseRolling,faSun,faSurprise,faSwimmer,faSync,faSyncAlt,faTableTennis,faTablet,faTabletAlt,faTag,faTags,faTape,faTasks,faTh,faThLarge,faThList,faTheaterMasks,faThumbsUp,faThumbtack,faTicketAlt,faTimes,faTimesCircle,faToolbox,faTools,faTrafficLight,faTrash,faTrashAlt,faTree,faTrophy,faTshirt,faTv,faUmbrella,faUmbrellaBeach,faUnderline,faUndo,faUndoAlt,faUniversalAccess,faUniversity,faUnlink,faUnlock,faUnlockAlt,faUpload,faUser,faUserAlt,faUserAltSlash,faUserCheck,faUserCircle,faUserClock,faUserCog,faUserEdit,faUserFriends,faUserGraduate,faUserMinus,faUserTie,faUserTimes,faUsers,faUsersCog,faUtensilSpoon,faUtensils,faVectorSquare,faVideo,faVideoSlash,faVolumeDown,faVolumeMute,faVolumeOff,faVolumeUp,faVoteYea,faWalking,faWallet,faWarehouse,faWater,faWaveSquare,faWeightHanging,faWifi,faWind,faWrench);



/**
 * Hooks, components, etc.
 */
import { Panel, PanelBody, PanelRow, RadioControl, ColorIndicator, TextControl, ToggleControl } from '@wordpress/components';
import { useBlockProps,InspectorControls,ColorPalette, URLInput, PlainText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	const blockProps = useBlockProps({
		style: {backgroundColor: attributes.buttonColor, color: attributes.iconColor }
	});

	var iconlist = library.definitions.fas;
	var iconCode;
	let iconOptions = Object.keys(iconlist).map( iconname => {
		  //alert(`${key}: ${value}`); // cucumber: 500 etc
			iconCode = <FontAwesomeIcon icon={iconname}/> 
		   return { label: iconCode, value: iconname  }
	});

	return (
		<div {...blockProps}>
			<div className='buttonlink'>
                <div className='inner_button'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={attributes.icon} />
                    </div>
                    <PlainText
                        className='buttonText'
                        value={ attributes.buttonText }
                        onChange={ ( title ) => setAttributes( { buttonText : title } ) }
                        placeholder={ __( 'Button Text' ) }
                    />
                </div>
        	</div>

			<InspectorControls>
                  <Panel>
						<PanelBody title="Mobile Button Block" className="mobileOptions" initialOpen={ true }>
							<PanelRow>
                                <div className="selectedIcon" >
                                    <label>Icon:</label>
                                    <div className="icon"><FontAwesomeIcon icon={attributes.icon} /></div>
                                </div>
                                <RadioControl
                                    className = "iconselect"
                                    selected={ attributes.icon }
                                    options={ iconOptions }
                                    onChange = { ( option ) => { setAttributes( { icon : option } ) } }
                                />
                                <URLInput
                                    label = "Button Link"
                                    value={ attributes.url }
                                    onChange={ ( link ) => setAttributes( { url : link } ) }
                                />
                                <ToggleControl
                                    label="Open in new tab"
                                    checked={ attributes.targetBlank }
                                    onChange={ (target) => setAttributes( { targetBlank: target} ) }
                                />
                                <div className='IconColorGroup'>
                                    <label>Icon Color:</label>
                                    <ColorIndicator colorValue={attributes.iconColor} />
                                </div>
                                  <ColorPalette 
                                      value={ attributes.iconColor}
                                      disableCustomColors = 'true'
                                      onChange={ ( color ) => setAttributes( {iconColor : color }) }
                                  />
                                <div className='ButtonColorGroup'>
                                    <label>Button Color:</label>
                                    <ColorIndicator colorValue={attributes.buttonColor} />
                                </div>
                                  <ColorPalette 
                                      value={ attributes.buttonColor }
                                      disableCustomColors = 'true'
                                      onChange={ ( color ) => setAttributes( { buttonColor : color }) }
                                  />
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                </InspectorControls>
			
		</div>
	);
}
