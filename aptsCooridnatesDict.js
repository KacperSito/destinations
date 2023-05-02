const airportsCoordinates = {
	"WAW": {lat: 52.16586593126193, lng: 20.967062665855927},
	"ORD": {lat: 41.978611, lng: -87.904724},
	"JFK": {lat: 40.641766, lng: -73.780968},
	"KRK": {lat: 50.07778, lng: 19.78472},
	"EWR": {lat: 40.6895314, lng: -74.17446239999998},
	"RZE": {lat: 50.11680625231919, lng: 22.024685822724084},
	"LHR": {lat: 51.470020, lng:-0.454295},
	"VCE": {lat: 45.503455, lng:12.344693},
	"MXP": {lat: 45.630063, lng:8.725531},
	"CDG": {lat: 49.008331,	lng:2.550791},
	"MUC": {lat: 48.1351253 , lng:11.5819806},
	"NCE": {lat: 43.6595, lng:7.2062},
	"GYD": {lat: 40.465, lng:50.0522},
	"TBS": {lat: 41.6697, lng:44.9568},
	"EVN": {lat: 40.149178, lng:44.398857},
	"LAX": {lat: 33.9415889,  lng:-118.40853},
	"MIA": {lat: 25.795865, lng:-80.28704570000002},
	"STR": {lat: 48.69, lng:9.221944},
	"FRA": {lat: 50.0379326, lng:8.562151800000038},
	"BER": {lat: 52.3663978, lng:13.4895614152},
	"HAM": {lat: 53.63636215, lng:9.99455013468418},
	"DUS": {lat: 51.2827846, lng:6.762270100000023},
	"ZRH": {lat: 47.458217, lng:8.555476},
	"GVA": {lat: 46.236979, lng:6.109089},
	"MAD": {lat: 40.525792, lng:-3.645054},
	"BCN": {lat: 41.297445, lng:2.08329409999998},
	"ARN": {lat: 59.649762 , lng:17.923781},
	"CPH": {lat: 55.6180236 ,lng:12.650762799999939},
	"BLL": {lat: 55.7408067 , lng:9.152599900000041},
	"OSL": {lat: 60.19755 , lng:11.100415},
	"GOT": {lat: 57.668799 , lng:12.292314},
	"OSR": {lat: 49.69611, lng:18.11083},
	"KSC": {lat: 48.6631 , lng:21.2411},
	"PRG": {lat: 50.1018, lng:14.2632},
	"DBV": {lat: 42.5611109 ,lng:18.268056},
	"BEG": {lat: 44.818401,lng:20.309099},
	"SJJ": {lat: 43.8246 , lng:18.3315},
	"TGD": {lat: 42.359167 , lng:19.251666999999998},
	"PRN": {lat: 42.572778, lng:21.035833},
	"SKP": {lat: 41.960876 , lng:21.627192},
	"TIA": {lat: 41.414445 ,lng:19.7193},
	"ZAG": {lat: 45.74075 , lng:16.067437},
	"LJU": {lat: 46.225943, lng:14.455914},
	"SOF": {lat: 42.689369, lng:23.414425},
	"OTP": {lat: 44.570731, lng:26.084412},
	"CLJ": {lat: 46.782507 , lng:23.688024},
	"RIX": {lat: 56.922655, lng:23.973313},
	"TLL": {lat: 59.414138 , lng:24.833375},
	"SXB": {lat: 48.5382995605469 , lng:7.62823009490967},
	"GDN": {lat: 54.377499, lng:18.466110},
	"SZY": {lat: 53.47583143, lng:20.935996256},
	"BZG": {lat: 53.097951 , lng:17.972681},
	"WRO": {lat: 51.104165, lng:16.880933},
	"KTW": {lat: 50.472802, lng:19.075881},
	"SZZ": {lat: 53.58472,lng:14.90222},
	"POZ": {lat: 52.416666666667, lng:16.833333333333},
	"LUZ": {lat: 51.235667869925, lng:22.715193661164},
	"IEG": {lat: 52.13850021362305 , lng:15.79860019683838},
	"DXB": {lat: 25.2531745 , lng:55.3656728},
	"DEL": {lat: 28.5561624 , lng:77.0999578},
	"BOM": {lat: 19.0901765 ,lng:72.86873909999997},
	"ICN": {lat: 37.4601908, lng:126.4406957},
	"NRT": {lat: 35.773118,lng:140.387184},
	"NQZ": {lat: 51.022202,lng:71.466904},
	"KIV": {lat: 47.033333333333, lng:28.966666666667},
	"TLV": {lat: 32.005532, lng:34.88541120000002},
	"BUD": {lat: 47.433333333333, lng:19.233333333333},
	"CAI": {lat: 30.119832854 ,lng:31.40333172},
	"YYZ": {lat: 43.67771760000001 ,lng:-79.62481969999999},
	"BEY": {lat: 33.819376 , lng:35.491204},
	"TSN": {lat: 39.124353000000, lng:117.346183000000},
	"PEK": {lat: 40.0798573, lng:116.60311209999998},
	"PKX": {lat: 39.49731625, lng:116.412330862356},
	"IST": {lat: 41.276901, lng:28.729324},
	"VIE": {lat: 48.1158333, lng:16.566575100000023},
	"BRU": {lat: 50.900999, lng:4.485574400000019},
	"LUX": {lat: 49.628899, lng:6.214745},
	"AMS": {lat: 52.308056, lng:4.764167},
	"LCY": {lat: 51.504844, lng: 0.049518},
	"SPU": {lat: 43.538944, lng: 16.297964},
	"VNO": {lat: 54.633333333333,lng: 25.283333333333},
	"RDO": {lat:  51.3892, lng:21.2133},
	"FCO": {lat:  41.773540, lng:12.239712}, 
	"PVK": {lat:  38.92556, lng:20.76528}, 
	"VAR": {lat:  43.23194, lng:27.82528}, 
	"BZG": {lat:  53.09667, lng:17.97778},
};