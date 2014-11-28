(function() {
var _UDS_CONST_LOCALE = 'th';
var _UDS_CONST_SHORT_DATE_PATTERN = 'DMY';
var _UDS_MSG_SEARCHER_IMAGE = ('\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e');
var _UDS_MSG_SEARCHER_WEB = ('\u0e40\u0e27\u0e47\u0e1a');
var _UDS_MSG_SEARCHER_BLOG = ('\u0e1a\u0e25\u0e47\u0e2d\u0e04');
var _UDS_MSG_SEARCHER_VIDEO = ('\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d');
var _UDS_MSG_SEARCHER_LOCAL = ('\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19');
var _UDS_MSG_SEARCHCONTROL_SAVE = ('\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a');
var _UDS_MSG_SEARCHCONTROL_KEEP = ('\u0e40\u0e01\u0e47\u0e1a');
var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('\u0e23\u0e27\u0e21\u0e16\u0e36\u0e07');
var _UDS_MSG_SEARCHCONTROL_COPY = ('\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01');
var _UDS_MSG_SEARCHCONTROL_CLOSE = ('\u0e1b\u0e34\u0e14');
var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('\u0e1c\u0e39\u0e49\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19');
var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('\u0e14\u0e39\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14...');
var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('\u0e41\u0e19\u0e1a\u0e08\u0e32\u0e01 Google');
var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48');
var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('\u0e1b\u0e34\u0e14\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48');
var _UDS_MSG_SEARCHER_NEWS = ('\u0e02\u0e48\u0e32\u0e27');
function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {return ('' + AGE_MINUTES_AGO + ' \u0e19\u0e32\u0e17\u0e35\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e1b');}
var _UDS_MSG_ONE_HOUR_AGO = ('1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e1b');
function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {return ('' + AGE_HOURS_AGO + ' \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e1b');}
function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {return ('\u0e2d\u0e49\u0e32\u0e07\u0e16\u0e36\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 ' + NUMBER);}
var _UDS_MSG_NEWS_RELATED = ('\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07');
var _UDS_MSG_BRANDING_STRING = ('\u0e42\u0e14\u0e22 \u0e01\u0e39\u0e40\u0e01\u0e34\u0e25');
var _UDS_MSG_SORT_BY_DATE = ('\u0e41\u0e22\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e27\u0e31\u0e19');
var _UDS_MSG_MONTH_ABBR_JAN = ('\u0e21.\u0e04.');
var _UDS_MSG_MONTH_ABBR_FEB = ('\u0e01.\u0e1e.');
var _UDS_MSG_MONTH_ABBR_MAR = ('\u0e21\u0e35.\u0e04.');
var _UDS_MSG_MONTH_ABBR_APR = ('\u0e40\u0e21.\u0e22.');
var _UDS_MSG_MONTH_ABBR_MAY = ('\u0e1e.\u0e04.');
var _UDS_MSG_MONTH_ABBR_JUN = ('\u0e21\u0e34.\u0e22.');
var _UDS_MSG_MONTH_ABBR_JUL = ('\u0e01.\u0e04.');
var _UDS_MSG_MONTH_ABBR_AUG = ('\u0e2a.\u0e04.');
var _UDS_MSG_MONTH_ABBR_SEP = ('\u0e01.\u0e22.');
var _UDS_MSG_MONTH_ABBR_OCT = ('\u0e15.\u0e04.');
var _UDS_MSG_MONTH_ABBR_NOV = ('\u0e1e.\u0e22.');
var _UDS_MSG_MONTH_ABBR_DEC = ('\u0e18.\u0e04.');
var _UDS_MSG_DIRECTIONS = ('\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07');
var _UDS_MSG_CLEAR_RESULTS = ('\u0e25\u0e1a\u0e25\u0e49\u0e32\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c');
var _UDS_MSG_SHOW_ONE_RESULT = ('\u0e41\u0e2a\u0e14\u0e07\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e40\u0e14\u0e35\u0e22\u0e27');
var _UDS_MSG_SHOW_MORE_RESULTS = ('\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e19\u0e35\u0e49');
var _UDS_MSG_SHOW_ALL_RESULTS = ('\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14');
var _UDS_MSG_SETTINGS = ('\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32');
var _UDS_MSG_SEARCH = ('\u0e04\u0e49\u0e19\u0e2b\u0e32');
var _UDS_MSG_SEARCH_UC = ('\u0e04\u0e49\u0e19\u0e2b\u0e32');
var _UDS_MSG_POWERED_BY = ('\u0e02\u0e31\u0e1a\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e42\u0e14\u0e22');
function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {return ('\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49 ' + LOCAL_RESULTS_PROVIDER);}
var _UDS_MSG_SEARCHER_BOOK = ('\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d');
function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {return ('\u0e2b\u0e19\u0e49\u0e32 ' + FOUND_ON_PAGE);}
function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {return ('' + PAGE_COUNT + ' \u0e2b\u0e19\u0e49\u0e32');}
var _UDS_MSG_SEARCHER_BY = ('\u0e42\u0e14\u0e22');
var _UDS_MSG_SEARCHER_CODE = ('\u0e23\u0e2b\u0e31\u0e2a');
var _UDS_MSG_UNKNOWN_LICENSE = ('\u0e43\u0e1a\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01');
var _UDS_MSG_SEARCHER_GSA = ('\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e04\u0e49\u0e19\u0e2b\u0e32');
var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21');
var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32');
var _UDS_MSG_SEARCHCONTROL_NEXT = ('\u0e16\u0e31\u0e14\u0e44\u0e1b');
var _UDS_MSG_GET_DIRECTIONS = ('\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07');
var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('\u0e16\u0e36\u0e07\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48');
var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('\u0e08\u0e32\u0e01\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48');
var _UDS_MSG_CLEAR_RESULTS_UC = ('\u0e25\u0e49\u0e32\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c');
var _UDS_MSG_SEARCH_THE_MAP = ('\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48');
var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e14\u0e39\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c');
var _UDS_MSG_EDIT_TAGS = ('\u0e41\u0e01\u0e49\u0e44\u0e02\u0e41\u0e17\u0e47\u0e01');
var _UDS_MSG_TAG_THIS_SEARCH = ('\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e41\u0e17\u0e47\u0e01\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e19\u0e35\u0e49');
var _UDS_MSG_SEARCH_STRING = ('\u0e2a\u0e15\u0e23\u0e34\u0e07\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32');
var _UDS_MSG_OPTIONAL_LABEL = ('\u0e1b\u0e49\u0e32\u0e22\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01');
var _UDS_MSG_DELETE = ('\u0e25\u0e1a');
var _UDS_MSG_DELETED = ('\u0e25\u0e1a');
var _UDS_MSG_CANCEL = ('\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01');
var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e40\u0e2d\u0e07');
var _UDS_MSG_IM_DONE_WATCHING = ('\u0e09\u0e31\u0e19\u0e14\u0e39\u0e08\u0e1a\u0e41\u0e25\u0e49\u0e27');
var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('\u0e1b\u0e34\u0e14\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e40\u0e25\u0e48\u0e19\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d');
var _UDS_MSG_NO_RESULTS = ('\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c');
var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14 Custom Search Engine \u0e19\u0e35\u0e49 \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e19\u0e35\u0e49\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48');
var _UDS_MSG_COUPONS = ('\u0e04\u0e39\u0e1b\u0e2d\u0e07');
var _UDS_MSG_BACK = ('\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a');
var _UDS_MSG_SUBSCRIBE = ('\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01');
var _UDS_MSG_SEARCHER_PATENT = ('\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e1a\u0e31\u0e15\u0e23');
var _UDS_MSG_USPAT = ('\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e1a\u0e31\u0e15\u0e23\u0e2a\u0e2b\u0e23\u0e31\u0e10\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e32');
var _UDS_MSG_USPAT_APP = ('\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e04\u0e33\u0e02\u0e2d\u0e23\u0e31\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e1a\u0e31\u0e15\u0e23\u0e2a\u0e2b\u0e23\u0e31\u0e10\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e32');
var _UDS_MSG_PATENT_FILED = ('\u0e22\u0e37\u0e48\u0e19\u0e41\u0e25\u0e49\u0e27');
var _UDS_MSG_ADS_BY_GOOGLE = ('\u0e42\u0e06\u0e29\u0e13\u0e32\u0e42\u0e14\u0e22 Google');
var _UDS_MSG_SET_DEFAULT_LOCATION = ('\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19');
var _UDS_MSG_NEWSCAT_TOPSTORIES = ('\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e40\u0e14\u0e48\u0e19');
var _UDS_MSG_NEWSCAT_WORLD = ('\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01');
var _UDS_MSG_NEWSCAT_NATION = ('\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28');
var _UDS_MSG_NEWSCAT_BUSINESS = ('\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08');
var _UDS_MSG_NEWSCAT_SCITECH = ('\u0e27\u0e34\u0e17\u0e22\u0e4c/\u0e40\u0e17\u0e04\u0e42\u0e19\u0e2f');
var _UDS_MSG_NEWSCAT_ENTERTAINMENT = ('\u0e1a\u0e31\u0e19\u0e40\u0e17\u0e34\u0e07');
var _UDS_MSG_NEWSCAT_HEALTH = ('\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e1e');
var _UDS_MSG_NEWSCAT_SPORTS = ('\u0e01\u0e35\u0e2c\u0e32');
var _UDS_MSG_NEWSCAT_POLITICS = ('\u0e01\u0e32\u0e23\u0e40\u0e21\u0e37\u0e2d\u0e07');
var _UDS_MSG_SEARCH_RESULTS = ('\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32');
var _UDS_MSG_DID_YOU_MEAN = ('\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e38\u0e13\u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07:');
var _UDS_MSG_CUSTOM_SEARCH = ('\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e40\u0e2d\u0e07');
var _UDS_MSG_LABELED = ('\u0e15\u0e34\u0e14\u0e1b\u0e49\u0e32\u0e22\u0e01\u0e33\u0e01\u0e31\u0e1a');
var _UDS_MSG_LOADING = ('\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...');
var _UDS_MSG_ALL_RESULTS_SHORT = ('\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14');
var _UDS_MSG_ALL_RESULTS_LONG = ('\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14');
var _UDS_MSG_REFINE_RESULTS = ('\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32:');
function _UDS_MSG_REVIEWS(REVIEW_COUNT) {return ('' + REVIEW_COUNT + ' \u0e04\u0e27\u0e32\u0e21\u0e40\u0e2b\u0e47\u0e19');}
function _UDS_MSG_CALORIES(CALORIES) {return ('' + CALORIES + ' \u0e41\u0e04\u0e25\u0e2d\u0e23\u0e35');}
function _UDS_MSG_PRICE_RANGE(RANGE) {return ('\u0e0a\u0e48\u0e27\u0e07\u0e23\u0e32\u0e04\u0e32: ' + RANGE);}
function _UDS_MSG_PRICE(PRICE) {return ('\u0e23\u0e32\u0e04\u0e32: ' + PRICE);}
function _UDS_MSG_AVAILABILITY(AVAILABILITY) {return ('\u0e2a\u0e15\u0e47\u0e2d\u0e01: ' + AVAILABILITY);}
function _UDS_MSG_TELEPHONE(TELEPHONE) {return ('\u0e42\u0e17\u0e23: ' + TELEPHONE);}
function _UDS_MSG_RESULT_INFO(NUMBER_OF_RESULTS, SEARCH_TIME) {return ('\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 ' + NUMBER_OF_RESULTS + ' \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 (\u0e43\u0e19 ' + SEARCH_TIME + ' \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35)');}
var _UDS_MSG_FILE_FORMAT = ('\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e44\u0e1f\u0e25\u0e4c:');
var _UDS_MSG_SHOWING_RESULTS_FOR = ('\u0e01\u0e33\u0e25\u0e31\u0e07\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a');
var _UDS_MSG_SEARCH_INSTEAD_FOR = ('\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e43\u0e2b\u0e21\u0e48\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49');
function _UDS_MSG_FILTERED_RESULTS(NUM) {return ('\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e21\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14 \u0e40\u0e23\u0e32\u0e08\u0e36\u0e07\u0e44\u0e14\u0e49\u0e15\u0e31\u0e14\u0e1a\u0e32\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e1a ' + NUM + ' \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e41\u0e2a\u0e14\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27\u0e2d\u0e2d\u0e01 \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16' + '<a>\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e42\u0e14\u0e22\u0e43\u0e2b\u0e49\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e31\u0e14\u0e2d\u0e2d\u0e01' + '</a>\u0e44\u0e14\u0e49\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23');}
var _UDS_MSG_ORDER_BY = ('\u0e08\u0e31\u0e14\u0e40\u0e23\u0e35\u0e22\u0e07\u0e15\u0e32\u0e21:');
var _UDS_MSG_ORDER_BY_RELEVANCE = ('\u0e04\u0e27\u0e32\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07');
var _UDS_MSG_ORDER_BY_DATE = ('\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48');
var _UDS_MSG_ORDER_BY_GET_LINK = ('\u0e41\u0e0a\u0e23\u0e4c\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49:');

var c=true,d=null,g=encodeURIComponent,i=window,k=google,m=navigator,o=document;function p(a,e){return a.className=e}var q="appendChild",r="push",t="status",u="createElement",v="ServiceBase",w="length",x="prototype",y="className",z="loader",A="feeds",B="CurrentLocale",C="getElementsByTagNameNS",aa=this,D=function(a,e,b){a=a.split(".");b=b||aa;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var f;a[w]&&(f=a.shift());)if(!a[w]&&e!==undefined)b[f]=e;else b=b[f]?b[f]:(b[f]={})};var E={};E.blank="&nbsp;";E.image=_UDS_MSG_SEARCHER_IMAGE;E.web=_UDS_MSG_SEARCHER_WEB;E.blog=_UDS_MSG_SEARCHER_BLOG;E.video=_UDS_MSG_SEARCHER_VIDEO;E.local=_UDS_MSG_SEARCHER_LOCAL;E.news=_UDS_MSG_SEARCHER_NEWS;E.book=_UDS_MSG_SEARCHER_BOOK;E.patent="Patent";E["ads-by-google"]=_UDS_MSG_ADS_BY_GOOGLE;E.cse="Custom Search Control";E.save=_UDS_MSG_SEARCHCONTROL_SAVE;E.keep=_UDS_MSG_SEARCHCONTROL_KEEP;E.include=_UDS_MSG_SEARCHCONTROL_INCLUDE;E.copy=_UDS_MSG_SEARCHCONTROL_COPY;E.close=_UDS_MSG_SEARCHCONTROL_CLOSE;
E["sponsored-links"]=_UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;E["see-more"]=_UDS_MSG_SEARCHCONTROL_SEE_MORE;E.watermark=_UDS_MSG_SEARCHCONTROL_WATERMARK;E["search-location"]=_UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;E["disable-address-lookup"]=_UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;E["sort-by-date"]=_UDS_MSG_SORT_BY_DATE;E.pbg=_UDS_MSG_BRANDING_STRING;E["n-minutes-ago"]=_UDS_MSG_MINUTES_AGO;E["n-hours-ago"]=_UDS_MSG_HOURS_AGO;E["one-hour-ago"]=_UDS_MSG_ONE_HOUR_AGO;E["all-n-related"]=_UDS_MSG_NEWS_ALL_N_RELATED;
E["related-articles"]=_UDS_MSG_NEWS_RELATED;E["page-count"]=_UDS_MSG_TOTAL_PAGE_COUNT;var G=[];G[0]=_UDS_MSG_MONTH_ABBR_JAN;G[1]=_UDS_MSG_MONTH_ABBR_FEB;G[2]=_UDS_MSG_MONTH_ABBR_MAR;G[3]=_UDS_MSG_MONTH_ABBR_APR;G[4]=_UDS_MSG_MONTH_ABBR_MAY;G[5]=_UDS_MSG_MONTH_ABBR_JUN;G[6]=_UDS_MSG_MONTH_ABBR_JUL;G[7]=_UDS_MSG_MONTH_ABBR_AUG;G[8]=_UDS_MSG_MONTH_ABBR_SEP;G[9]=_UDS_MSG_MONTH_ABBR_OCT;G[10]=_UDS_MSG_MONTH_ABBR_NOV;G[11]=_UDS_MSG_MONTH_ABBR_DEC;E["month-abbr"]=G;E.directions=_UDS_MSG_DIRECTIONS;
E["clear-results"]=_UDS_MSG_CLEAR_RESULTS;E["show-one-result"]=_UDS_MSG_SHOW_ONE_RESULT;E["show-more-results"]=_UDS_MSG_SHOW_MORE_RESULTS;E["show-all-results"]=_UDS_MSG_SHOW_ALL_RESULTS;E.settings=_UDS_MSG_SETTINGS;E.search=_UDS_MSG_SEARCH;E["search-uc"]=_UDS_MSG_SEARCH_UC;E["powered-by"]=_UDS_MSG_POWERED_BY;E.sa=_UDS_MSG_SEARCHER_GSA;E.by=_UDS_MSG_SEARCHER_BY;E.code=_UDS_MSG_SEARCHER_CODE;E["unknown-license"]=_UDS_MSG_UNKNOWN_LICENSE;E["more-results"]=_UDS_MSG_SEARCHCONTROL_MORERESULTS;
E.previous=_UDS_MSG_SEARCHCONTROL_PREVIOUS;E.next=_UDS_MSG_SEARCHCONTROL_NEXT;E["get-directions"]=_UDS_MSG_GET_DIRECTIONS;E["to-here"]=_UDS_MSG_GET_DIRECTIONS_TO_HERE;E["from-here"]=_UDS_MSG_GET_DIRECTIONS_FROM_HERE;E["clear-results-uc"]=_UDS_MSG_CLEAR_RESULTS_UC;E["search-the-map"]=_UDS_MSG_SEARCH_THE_MAP;E["scroll-results"]=_UDS_MSG_SCROLL_THROUGH_RESULTS;E["edit-tags"]=_UDS_MSG_EDIT_TAGS;E["tag-search"]=_UDS_MSG_TAG_THIS_SEARCH;E["search-string"]=_UDS_MSG_SEARCH_STRING;E["optional-label"]=_UDS_MSG_OPTIONAL_LABEL;
E["delete"]=_UDS_MSG_DELETE;E.deleted=_UDS_MSG_DELETED;E.cancel=_UDS_MSG_CANCEL;E["upload-video"]=_UDS_MSG_UPLOAD_YOUR_VIDEOS;E["im-done"]=_UDS_MSG_IM_DONE_WATCHING;E["close-player"]=_UDS_MSG_CLOSE_VIDEO_PLAYER;E["no-results"]=_UDS_MSG_NO_RESULTS;E["linked-cse-error-results"]=_UDS_MSG_LINKEDCSE_ERROR_RESULTS;E.back=_UDS_MSG_BACK;E.subscribe=_UDS_MSG_SUBSCRIBE;E["us-pat"]="US Pat.";E["us-pat-app"]="US Pat. App";E["us-pat-filed"]="Filed";var _json_cache_defeater_=(new Date).getTime(),_json_request_require_prep=c;function H(a,e){var b;if(b=I("msie"))b="msie 6.0"in J?J["msie 6.0"]:(J["msie 6.0"]=m.appVersion.toLowerCase().indexOf("msie 6.0")!=-1);b?i.setTimeout(K(this,L,[a,e]),0):L(a,e)}
function L(a,e){var b=o.getElementsByTagName("head")[0];b||(b=o.body.parentNode[q](o[u]("head")));var f=o[u]("script");f.type="text/javascript";f.charset="utf-8";var h=_json_request_require_prep?a+"&key="+k[z].ApiKey+"&v="+e:a;if(I("msie")||I("safari")||I("konqueror"))h=h+"&nocache="+_json_cache_defeater_++;f.src=h;var j=function(){f.onload=d;f.parentNode.removeChild(f);delete f};h=function(l){l=(l?l:i.event).target?(l?l:i.event).target:(l?l:i.event).srcElement;if(l.readyState=="loaded"||l.readyState==
"complete"){l.onreadystatechange=d;j()}};if(m.product=="Gecko")f.onload=j;else f.onreadystatechange=h;b[q](f)}function ba(a,e){return function(){return e.apply(a,arguments)}}function K(a,e,b){return function(){return e.apply(a,b)}}function N(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function O(a,e){try{a[q](e)}catch(b){}return e}function P(a,e){var b=o[u]("div");if(a)b.innerHTML=a;if(e)p(b,e);return b}function Q(a){var e=o[u]("div");if(a)p(e,a);return e}
function R(a,e,b){(a=a.insertRow(-1))||alert(a);for(var f=0;f<e;f++)S(a,b);return a}function S(a,e){var b=a.insertCell(-1);if(e)p(b,e);return b}function T(a,e){var b;a:{if(!(a==d||a[y]==d)){b=a[y].split(" ");for(var f=0;f<b[w];f++)if(b[f]==e){b=c;break a}}b=false}b||(a.className+=" "+e)}function U(a,e){if(a[y]!=d){for(var b=a[y].split(" "),f=[],h=false,j=0;j<b[w];j++)if(b[j]!=e)b[j]&&f[r](b[j]);else h=c;if(h)p(a,f.join(" "))}}
function I(a){if(a in V)return V[a];return V[a]=m.userAgent.toLowerCase().indexOf(a)!=-1}var V={},J={},ca,da;if(i.qa){ca=c;if(i.XMLHttpRequest)da=c}function ea(a){this.G=a+"branding";this.w=a+"branding-vertical";this.ra=a+"branding-img";this.ua=a+"branding-user-defined";this.Q=a+"branding-img-noclear";this.fa=a+"branding-clickable";this.text=a+"branding-text"}
var fa={"zh-CN":{month:" \u6708 ",year:" \u5e74 ",day:" \u65e5 "},"zh-TW":{month:" \u6708 ",year:" \u5e74 ",day:" \u65e5 "},ja:{month:"\u6708",year:"\u5e74",day:"\u65e5"},ko:{month:" \uc6d4 ",year:" \ub144 ",day:" \uc77c "}};
function ga(a,e,b){var f=(new Date).getTime(),h=a.getTime();if(f<h)return E["n-minutes-ago"](2);f=f-h;if(f<36E5){e=Math.floor(f/6E4);return E["n-minutes-ago"](e<=1?2:e)}if(f<864E5){e=Math.floor(f/36E5);if(e<=1)return E["one-hour-ago"];else return E["n-hours-ago"](e)}f=a.getFullYear();h=a.getMonth();var j=E["month-abbr"][h];a=a.getDate();if(a<10)a="0"+a;switch(e){case "MDY":e=j+" "+a+", "+f;break;case "YMD":if(b&&(b=="zh-CN"||b=="zh-TW"||b=="ja"||b=="ko")){e=fa[b];e=f+e.year+(h+1)+e.month+a+e.day}else e=
f+" "+j+" "+a;break;default:case "DMY":e=a+" "+j+" "+f;break}return e};k[A].aa="_top";D("google.feeds.LINK_TARGET_TOP",k[A].aa,void 0);k[A].L="_self";D("google.feeds.LINK_TARGET_SELF",k[A].L,void 0);k[A].$="_parent";D("google.feeds.LINK_TARGET_PARENT",k[A].$,void 0);k[A].Z="_blank";D("google.feeds.LINK_TARGET_BLANK",k[A].Z,void 0);k[A].a=function(a){this.O=a;this.V=k[A].a.K;this.m=k[A].a.t;this.S=false};D("google.feeds.Feed",k[A].a,void 0);k[A].a.ca=-1;k[A].a.MAX_ENTRIES=k[A].a.ca;k[A].a.K=4;k[A].a.DEFAULT_NUM_ENTRIES=k[A].a.K;k[A].a.F="xml";k[A].a.XML_FORMAT=k[A].a.F;
k[A].a.t="json";k[A].a.JSON_FORMAT=k[A].a.t;k[A].a.C="json_xml";k[A].a.MIXED_FORMAT=k[A].a.C;k[A].a.p=[];k[A].a.s=function(a,e){var b=false,f=d;if(a[w])for(var h=0;h<a[w];h++)if(a[h]==d){a[h]=e;f=h;b=c;break}if(!b){f=a[w];a[r](e)}return f};k[A].a.AllocateCompletionMapContext=k[A].a.s;k[A].a.D=function(a,e,b,f,h){var j=0;if(a)j=parseInt(a,10);a=k[A].a.p[j];k[A].a.p[j]=d;a.I(e,b,f,h)};k[A].a.RawCompletion=k[A].a.D;
k[A].a[x].load=function(a){var e=new k[A].o;e.h=a;e.m=this.m;a=k[A].a.s(k[A].a.p,e);a=k[z][v]+"/Gfeeds?callback=google.feeds.Feed.RawCompletion&context="+a+"&num="+this.V+"&hl="+k[A][B]+"&output="+this.m;if(this.O)a+="&q="+g(this.O);if(this.S)a+="&scoring=h";H(a,k[A].Version)};k[A].a[x].load=k[A].a[x].load;k[A].a[x].q=function(a){this.V=a};k[A].a[x].setNumEntries=k[A].a[x].q;k[A].a[x].oa=function(a){switch(a){case k[A].a.F:case k[A].a.C:case k[A].a.t:this.m=a;break;default:this.m=k[A].a.t;break}};
k[A].a[x].setResultFormat=k[A].a[x].oa;k[A].a[x].R=function(){this.S=c};k[A].a[x].includeHistoricalEntries=k[A].a[x].R;k[A].o=function(){};D("google.feeds.Result",k[A].o,void 0);
k[A].o[x].I=function(a,e,b){this.status={code:e};if(b)this[t].message=b;if(e!=200){this.error=this[t];switch(this.m){case k[A].a.F:this.xmlDocument=d;break;case k[A].a.C:this.xmlDocument=d;default:this.feed={};this.feed.entries=[];break}}else{if(a.feed)this.feed=a.feed;if(a.xmlString){a=a.xmlString;if(a!=d){if(typeof DOMParser!="undefined")a=(new DOMParser).parseFromString(a,"application/xml");else if(typeof ActiveXObject!="undefined"){e=new ActiveXObject("Microsoft.XMLDOM");e.loadXML(a);a=e}else{e=
new XMLHttpRequest;e.open("GET","data:text/xml;charset=utf-8,"+g(a),false);e.send(d);a=e.responseXML}this.xmlDocument=a;a:if(!(this.xmlDocument==d||this.feed==d)){a=k[A].o.X(this.feed.type);if(a!=d){e=this.xmlDocument;if(a.e){e=k[A][C](this.xmlDocument,a.k,a.e);if(e==d||e[w]==0)break a;e=e[0]}a=k[A][C](e,a.k,a.j);if(!(a==d||a[w]==0))if(a[w]==this.feed.entries[w])for(e=0;e<a[w];e++)this.feed.entries[e].xmlNode=a[e]}}}}}this.h&&this.h(this)};
k[A].o.X=function(a){var e=d;switch(a){case "rss":case "rss091":case "rss091u":case "rss091n":case "rss092":case "rss093":case "rss094":case "rss20":e={e:"channel",j:"item",k:""};break;case "rss090":e={e:"",j:"item",k:"http://my.netscape.com/rdf/simple/0.9/"};break;case "rss10":e={e:"",j:"item",k:"http://purl.org/rss/1.0/"};break;case "atom03":e={e:"feed",j:"entry",k:"http://purl.org/atom/ns#"};break;case "atom":case "atom10":e={e:"feed",j:"entry",k:"http://www.w3.org/2005/Atom"};break}return e};
k[A].M=1;D("google.feeds.VERTICAL_BRANDING",k[A].M,void 0);k[A].Y=2;D("google.feeds.HORIZONTAL_BRANDING",k[A].Y,void 0);k[A].da=E;D("google.feeds.Strings",k[A].da,void 0);k[A].CurrentLocale=_UDS_CONST_LOCALE;D("google.feeds.CurrentLocale",k[A][B],void 0);k[A].ShortDatePattern=_UDS_CONST_SHORT_DATE_PATTERN;D("google.feeds.ShortDatePattern",k[A].ShortDatePattern,void 0);
k[A].ka=function(a,e,b){var f=e&&e==k[A].M,h=new ea("gf-");e=Q(h.G);var j=h.G,l=o[u]("table");l.setAttribute("cellSpacing",0);l.setAttribute("cellPadding",0);if(j)p(l,j);O(e,l);f=!f;if(!f){T(e,h.w);T(l,h.w)}var n=R(l,0),s;if(f)s=j=n;else{j=n;s=R(l,0)}var F="/css/small-logo.png",M=51;n=15;if(b)if(typeof b=="string")if(b.match(/^http:\/\/www\.youtube\.com/)){F="/css/youtube-logo-55x24.png";M=55;n=24;T(e,h.G+"-youtube");if(!f){T(e,h.w+"-youtube");T(l,h.w+"-youtube")}}f=S(j,h.text);l=S(s,h.Q);j=P(E["powered-by"],
h.text);F=k[z][v]+F;M=M;n=n;s=h.Q;if(ca&&!da){s=Q(s);s.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+F+'")';s.style.width=M+"px";s.style.height=n+"px"}else{n=o[u]("img");n.src=F;if(s)p(n,s);s=n}n=s;O(f,j);if(b){f="http://www.google.com";if(typeof b=="string"&&(b.match(/^http:\/\/[a-z]*\.google\.com/)||b.match(/^http:\/\/www\.youtube\.com/)))f=b;b=f;f=o[u]("a");f.href=b;f.target="_BLANK";p(f,h.fa);O(f,n);O(l,f)}else O(l,n);if(a){a=typeof a=="string"?o.getElementById(a):a;
N(a);O(a,e)}return e};D("google.feeds.getBranding",k[A].ka,void 0);k[A].getElementsByTagNameNS=function(a,e,b){if(e==d)e="";if(a[C])a=a[C](e,b);else{var f=a.getElementsByTagName("*");a=[];for(var h=0;h<f[w];h++){var j=f[h].tagName;j=j.substring(j.lastIndexOf(":")+1);j==b&&f[h].namespaceURI==e&&a[r](f[h])}}return a};D("google.feeds.getElementsByTagNameNS",k[A][C],void 0);k[A].ia=function(a,e){var b=new k[A].A;b.h=e;b=k[A].a.s(k[A].a.p,b);b=k[z][v]+"/GfindFeeds?callback=google.feeds.Feed.FindRawCompletion&context="+b+"&hl="+k[A][B];if(a)b+="&q="+g(a);H(b,k[A].Version)};D("google.feeds.findFeeds",k[A].ia,void 0);k[A].a.W=k[A].a.D;k[A].a.FindRawCompletion=k[A].a.W;k[A].A=function(){};D("google.feeds.FindResult",k[A].A,void 0);
k[A].A[x].I=function(a,e,b){this.status={code:e};if(b)this[t].message=b;if(e!=200){this.error=this[t];this.j=[]}else{if(a.entries)this.entries=a.entries;if(a.query)this.query=a.query}this.h&&this.h(this)};k[A].ma=function(a,e){var b=new k[A].B;b.h=e;b=k[A].a.s(k[A].a.p,b);b=k[z][v]+"/GlookupFeed?callback=google.feeds.Feed.LookupRawCompletion&context="+b+"&hl="+k[A][B];if(a)b+="&q="+g(a);H(b,k[A].Version)};D("google.feeds.lookupFeed",k[A].ma,void 0);k[A].a.ba=k[A].a.D;k[A].a.LookupRawCompletion=k[A].a.ba;k[A].B=function(){};D("google.feeds.LookupResult",k[A].B,void 0);
k[A].B[x].I=function(a,e,b){this.status={code:e};if(b)this[t].message=b;if(e!=200){this.error=this[t];this.url=d}else{if(a.url)this.url=a.url;if(a.query)this.query=a.query}this.h&&this.h(this)};k[A].b=function(){this.ta=d;this.d=[];this.U=k[A].L;this.u=k[A].b.z;this.r=this.v=this.l=d};D("google.feeds.FeedControl",k[A].b,void 0);k[A].b.n="tabbed";k[A].b.DRAW_MODE_TABBED=k[A].b.n;k[A].b.z="linear";k[A].b.DRAW_MODE_LINEAR=k[A].b.z;k[A].b[x].ea=function(a,e,b){this.d[r](new W(new k[A].a(a),e,this,b))};k[A].b[x].addFeed=k[A].b[x].ea;
k[A].b[x].ga=function(a,e){if(e)if(e.drawMode)if(e.drawMode==k[A].b.n||e.drawMode==k[A].b.z)this.u=e.drawMode;this.e=Q(ha);this.v=Q(ia);if(this.u==k[A].b.n){this.r=Q(ja);O(this.e,this.r);this.c=[];for(var b=this.f=0;b<this.d[w];b++){var f={};f.g=P(this.d[b].T);f.i=d;f.g.onclick=K(this,k[A].b[x].pa,[b]);this.c[b]=f;O(this.r,f.g)}}O(this.e,this.v);for(b=0;b<this.d[w];b++){this.d[b].e=Q(ka);if(this.u==k[A].b.n)this.c[b].i=this.d[b].e;f=Q(la);var h=P(this.d[b].T,ma);O(f,h);this.d[b].J=Q(na);O(this.v,
this.d[b].e);O(this.d[b].e,f);O(this.d[b].e,this.d[b].J)}if(this.u==k[A].b.n)for(b=0;b<this.d[w];b++){T(this.c[b].g,oa);T(this.c[b].i,pa);if(b==this.f){T(this.c[b].g,X);T(this.c[b].i,Y)}else{T(this.c[b].g,Z);T(this.c[b].i,$)}}b=this.e;if(a)try{N(a);a[q](b)}catch(j){}p(this.v,qa);if(this.r)p(this.r,ra);for(b=0;b<this.d[w];b++){f=this.d[b];this.l!=d&&f.l==d&&f.P.q(this.l);f.P.load(f.la)}};k[A].b[x].draw=k[A].b[x].ga;k[A].b[x].q=function(a){this.l=a};k[A].b[x].setNumEntries=k[A].b[x].q;
k[A].b[x].na=function(a){this.U=a};k[A].b[x].setLinkTarget=k[A].b[x].na;k[A].b[x].N=function(a){var e=Q(sa),b;b=a.link;var f=a.title,h=this.U,j=ta,l=P(d,j),n=o[u]("a");n.href=b;n.innerHTML=f;if(j)p(n,j);if(h)n.target=h;l[q](n);O(e,l);if(a.author){b=P(E.by+"&nbsp;"+a.author,ua);O(e,b);b="";if(a.publishedDate)b="-";b=P(b,va);O(e,b)}if(a.publishedDate){b=P(ga(new Date(a.publishedDate),k[A].ShortDatePattern,k[A][B]),wa);O(e,b)}b=P(a.contentSnippet,xa);O(e,b);O(e,b);a.html=e};k[A].b[x].createHtml=k[A].b[x].N;
k[A].b[x].H=function(a,e){var b,f;N(e.J);for(var h=0;h<a.feed.entries[w];h++){b=a.feed.entries[h];b.html||this.N(b);if(b.html){f=Q(ya);b=b.html.cloneNode(c);O(f,b);O(e.J,f)}}};k[A].b[x].pa=function(a){if(this.f!=a){U(this.c[this.f].g,X);U(this.c[this.f].i,Y);T(this.c[this.f].g,Z);T(this.c[this.f].i,$);this.f=a;T(this.c[this.f].g,X);T(this.c[this.f].i,Y);U(this.c[this.f].g,Z);U(this.c[this.f].i,$)}};
function W(a,e,b,f){this.P=a;this.T=e;this.l=d;if(f){if(f.numEntries){a.q(f.numEntries);this.l=f.numEntries}f.includeHistoricalEntries&&a.R()}this.ha=b;this.la=ba(this,W[x].H)}W[x].H=function(a){a.error||this.ha.H(a,this)};var sa="gf-result",va="gf-spacer",ta="gf-title",xa="gf-snippet",ua="gf-author",wa="gf-relativePublishedDate",ha="gfc-control",ka="gfc-resultsRoot",na="gfc-results",ya="gfc-result",la="gfc-resultsHeader",ia="gfc-resultsbox-invisible",qa="gfc-resultsbox-visible",ma="gfc-title",ra="gfc-tabsArea",ja="gfc-tabsAreaInvisible",oa="gfc-tabHeader",X="gfc-tabhActive",Z="gfc-tabhInactive",Y="gfc-tabdActive",$="gfc-tabdInactive",pa="gfc-tabData";
google.loader.loaded({"module":"feeds","version":"1.0","components":["default"]});
google.loader.eval.feeds = function() {eval(arguments[0]);};if (google.loader.eval.scripts && google.loader.eval.scripts['feeds']) {(function() {var scripts = google.loader.eval.scripts['feeds'];for (var i = 0; i < scripts.length; i++) {google.loader.eval.feeds(scripts[i]);}})();google.loader.eval.scripts['feeds'] = null;}})();