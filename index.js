var express = require('express');
var socket = require('socket.io');
// var fs = require('fs');

const cors = require('cors');
// const redis = require('redis')
var Filter = require('bad-words')
var app = express();
// app.use(allowCrossDomain)
app.use(cors());
var server = app.listen(process.env.PORT || 5000, function(){
    //[//console.log('listening for requests on port 5000,');
});
    var io = socket(server);
var timeout_intervals = {};
io.on('connection', (socket) => {
	var usa_lat_lon=[[40.758,-73.9855],[40.758,-73.9855],[37.7897,-122.3972],[37.7897,-122.3972],[37.79366,-122.403014],[37.8199,-122.4783],[40.6892,-74.0445],[37.762256,-122.435177],[38.6247,-90.1848],[43.6426,-79.3871],[33.984763,-118.471835],[21.3069,-157.8583],[34.011281,-118.495102],[42.357113,-71.071741],[38.903159,-77.039775],[38.916527,-77.201024],[45.521962,-122.678228],[45.4997,-122.431],[45.0051,-122.7831],[44.938753,-123.038275],[45.210015,-123.197393],[45.300316,-122.976765],[45.356076,-122.840742],[45.382163,-122.761511],[45.519733,-122.678061],[37.335711,-121.886309],[38.5766,-121.4932],[43.4799,-110.7624],[41.13355,-104.816074],[32.785386,-96.799413],[29.424709,-98.488525],[40.730209,-73.992533],[25.776288,-80.187334],[40.6413,-73.7781],[41.9742,-87.9073],[33.6407,-84.4277],[33.759415,-84.38767],[30.422107,-84.293102],[36.1147,-115.1728],[36.1147,-115.1728],[36.1147,-115.1728],[37.769912,-122.447572],[37.770274,-122.444657],[39.531867,-119.815336],[43.658001,-70.257072],[44.260289,-72.576222],[44.260874,-72.578897],[45.521734,-122.692957],[45.518897,-122.680926],[45.531077,-122.653685],[45.530128,-122.661565],[45.530777,-122.657502],[47.609711,-122.34097],[47.609559,-122.338989],[47.610237,-122.336727],[30.282061,-81.389363],[30.315016,-81.394784],[30.322196,-81.395789],[38.2532,-85.7538],[42.955692,-85.67261],[41.894996,-87.624357],[41.888996,-87.624385],[21.313024,-157.861629],[21.311391,-157.862271],[21.276675,-157.826222],[21.309927,-157.861102],[61.219515,-149.891288],[61.217588,-149.895359],[58.300543,-134.405572],[58.298532,-134.403139],[55.34118,-131.646621],[55.342487,-131.648519],[40.709954,-73.962473],[33.154567,-117.350423],[33.819365,-116.546696],[33.754739,-118.121942],[33.659799,-117.999351],[37.795937,-122.407711],[37.808,-122.4177],[37.7879,-122.4075],[32.747586,-117.160499],[41.2132,-124.0046],[40.759154,-73.984944],[41.879018,-87.640483],[41.881828,-87.640433],[41.885732,-87.635396],[41.258151,-95.93255],[41.258151,-95.93255],[41.255361,-95.932964],[41.255548,-95.92958],[40.793684,-73.958085],[40.793614,-73.959318],[40.614048,-73.981412],[40.725035,-73.999375],[40.818254,-73.960735],[40.783598,-73.947645],[37.540323,-77.43292],[37.542528,-77.436494],[35.09072,-106.660374],[33.984582,-118.471681],[34.009245,-118.497565],[34.042606,-118.257499],[34.070142,-118.40374],[37.814993,-122.478002],[29.9792,31.1342],[40.6892,-74.0445],[41.4036,2.1744],[51.5007,-.1246],[41.891394,12.491651],[48.8606,2.3376],[51.1789,-1.8262],[41.8827,-87.6233],[36.426893,25.428029],[37.762256,-122.435177],[20.6843,-88.5678],[34.011281,-118.495102],[41.899226,12.476743],[38.6247,-90.1848],[43.6426,-79.3871],[44.107375,9.725481],[52.5163,13.3777],[40.4319,116.5704],[34.3926,132.4523],[37.7897,-122.3972],[37.7898,-122.3959],[35.659784,139.744055],[37.79366,-122.403014],[-15.7983,-47.8755],[52.5186,13.3762],[37.513,127.1027],[41.8789,-87.6359],[41.9009,12.4833],[41.9022,12.4539],[35.659477,139.7005],[37.9715,23.7257],[40.7464,-73.8451],[43.8791,-103.4591],[38.8814,-77.0365],[38.8977,-77.0365],[38.889838,-77.011728],[38.889935,-77.037673],[38.8894,-77.0405],[-13.1631,-72.545],[45.502633,-73.570384],[43.656037,-79.382201],[43.642576,-79.387087],[43.674812,-79.388507],[49.286603,-123.11179],[49.284833,-123.114621],[49.28044,-123.121418],[49.284179,-123.115472],[49.283654,-123.116406],[49.277715,-123.117467],[49.284702,-123.124944],[49.273411,-123.113484],[49.28093,-123.119142],[48.425693,-123.367579],[48.425693,-123.367579],[48.422156,-123.368663],[48.41486,-123.365276],[48.414726,-123.363411],[49.326796,-122.949175],[45.495502,-73.57738],[51.056527,-114.069277],[49.893994,-97.143049],[49.894929,-97.145052],[49.88229,-97.154382],[51.503208,-.047608],[51.506362,-.142305],[59.9318,30.3527],[59.9318,30.3527],[59.9318,30.3527],[55.748565,37.588368],[55.748565,37.588368],[59.924145,30.383505],[55.756627,37.614624],[55.7539,37.6208],[54.720099,20.50166],[54.716608,20.503044],[54.719881,20.502897],[54.707445,20.527951],[43.120132,131.885674],[43.116115,131.883592],[45.2671,19.8335],[55.75744,37.622938],[54.98024,82.90188],[54.986824,82.890122],[59.935075,30.325247],[54.9833,82.8964],[52.037908,113.491912],[52.037589,113.499286],[-22.987572,-43.222958],[-22.906031,-43.177308],[-22.970802,-43.186546],[-22.952301,-43.186975],[-22.953982,-43.191755],[-23.574827,-46.688067],[-23.572509,-46.675234],[-22.982456,-43.193644],[-22.981807,-43.190289],[-22.966844,-43.186835],[-22.987779,-43.196431],[-23.567702,-46.669417],[-25.69232,-54.43467],[-22.950923,-43.213026],[-22.951956,-43.210492],[-22.949465,-43.15641],[-22.949309,-43.154596],[-22.91555,-43.1797],[-15.801817,-47.894947],[-22.95063,-43.164284],[-15.759995,-47.895292],[-12.956503,-38.387074],[-25.428485,-49.265903],[-25.427975,-49.272233],[-3.740851,-38.541177],[-33.883488,151.2045],[-33.882604,151.204054],[-33.858257,151.208399],[-33.858467,151.208267],[-33.855835,151.209631],[-33.855639,151.210518],[-33.873535,151.21159],[-27.464953,153.02064],[-37.817135,144.952985],[-37.81628,144.956105],[-37.818785,144.968144],[-37.817442,144.967511],[-37.81155,144.968515],[-37.810296,144.962819],[-37.808067,144.956749],[-27.476276,153.014262],[-27.482182,153.018777],[-31.951902,115.876272],[-32.168358,115.86228],[-32.03813,115.86828],[-34.923098,138.597259],[-34.923206,138.595586],[-34.92289,138.601393],[-34.92271,138.605624],[-34.922421,138.610378],[-42.895138,147.333299],[-27.995298,153.430459],[-37.990525,-57.546139],[-37.99122,-57.54728],[-37.991331,-57.548906],[-34.562153,-58.456777],[-34.562085,-58.456507],[-34.561719,-58.455892],[-34.563994,-58.454805],[-34.561694,-58.455804],[-31.417254,-64.198682],[-31.416683,-64.197675],[-31.415069,-64.195832],[-31.414769,-64.192591],[-32.938178,-60.636563],[-32.938044,-60.636913],[-32.930519,-60.649546],[-37.989788,-57.547701],[-37.991187,-57.547319],[-24.789926,-65.408988],[-24.789881,-65.409666],[-24.795694,-65.424726],[20.913841,-100.743784],[35.687421,-105.938518],[-32.872814,-68.827629],[48.859676,2.292323],[48.861985,2.288764],[48.861475,2.290213],[48.860736,2.296017],[48.866286,2.318601],[48.848691,2.348276],[48.836112,2.293948],[43.553832,7.020194],[43.552889,7.020571],[43.552511,7.021563],[43.548235,7.028576],[43.694543,7.263876],[43.695885,7.265239],[43.69563,7.274916],[45.759459,4.82866],[45.758119,4.829329],[44.835319,-.57136],[44.836452,-.571504],[43.602906,1.441646],[47.212571,-1.546158],[43.949414,4.808819],[47.322894,5.026628],[28.64946,77.207522],[28.651506,77.208118],[28.661702,77.181],[26.492697,74.549942],[25.315217,82.998796],[25.315217,82.998796],[25.320668,83.023103],[25.315974,83.019205],[22.630153,88.385631],[22.549372,88.383153],[22.547847,88.381207],[22.545933,88.386136],[18.936454,72.835822],[18.937173,72.835817],[18.913594,72.82332],[18.912379,72.822104],[18.92255,72.834467],[25.354131,78.639282],[25.349826,78.640344],[31.630677,74.875434],[31.625358,74.875945],[32.247916,77.189258],[32.244381,77.187516],[32.220349,77.198614],[32.244339,77.187904],[28.655919,77.204416],[39.934209,116.403149],[31.240285,121.490588],[31.205121,121.506303],[31.166701,121.54592],[31.223192,121.444977],[31.223192,121.444977],[31.237463,121.484639],[40.431919,116.570377],[29.538451,106.514611],[29.538451,106.514611],[29.537535,106.507147],[39.915932,116.411145],[39.911448,116.411359],[31.274222,120.637781],[31.274222,120.637781],[31.576486,120.299125],[31.576486,120.299125],[31.543299,120.30485],[31.542412,120.303365],[32.021647,118.772922],[31.886462,120.555504],[30.531136,114.324987],[30.539285,114.354233],[30.519551,114.340924],[22.544191,114.086719],[32.202342,119.444744],[35.659111,139.700394],[35.659458,139.700552],[35.659937,139.701672],[35.698048,139.707406],[35.693908,139.704671],[35.698619,139.772663],[35.669152,139.69632],[35.659614,139.700431],[35.695583,139.702698],[35.692659,139.699582],[34.662975,135.502283],[34.733561,135.500193],[34.73483,135.501719],[34.995893,135.781507],[38.252057,140.855769],[38.258976,140.883444],[35.906912,139.482416],[35.641952,139.702048],[35.170512,136.880456],[34.297297,132.318128],[32.813273,130.704237],[32.746753,129.879483],[34.395828,132.453814],[43.055377,141.353386],[43.057038,141.351138],[1.295433,103.85753],[1.280174,103.855759],[12.782044,101.647166],[3.14427,101.706213],[51.516207,-.133839],[51.516207,-.133839],[51.520321,-.134084],[51.500863,-.121954],[51.505579,-.075326],[51.516134,-.174605],[52.518635,13.3753],[52.516253,13.377159],[48.139252,11.566118],[48.14293,11.58],[48.137642,11.579796],[50.846713,4.352346],[51.205785,3.221424],[59.332366,18.064477],[48.145774,17.107378],[44.817726,20.456989],[60.167679,24.943039],[59.436811,24.742718],[58.380283,26.723508],[56.948056,24.120961],[41.373965,2.176127],[40.423799,-3.711197],[40.414264,-3.703374],[45.464149,9.18986],[51.068701,-1.797369],[51.440773,5.475545],[42.699644,23.322888],[49.601032,6.133417],[52.363717,4.881663],[59.335524,18.063378],[52.65018,-7.249856],[45.398387,11.874765],[45.417013,11.880054],[59.858378,17.645178],[47.991402,7.854445],[36.160739,-86.777807],[36.149194,-86.812988],[35.22913,-80.839371],[35.225655,-80.845213],[39.09976,-94.577968],[35.139683,-90.052123],[31.760667,-106.491447],[35.776918,-78.638255],[35.770581,-78.72298],[37.443515,-122.169681],[37.421882,-122.083764],[44.986719,-93.275413],[29.954086,-90.069718],[33.809653,-117.918978],[32.300558,-90.191024],[37.427309,-122.171013],[42.051562,-70.185555],[28.538624,-81.379126],[27.766268,-82.63177],[35.746619,-78.809957],[35.794894,-78.699363],[39.950349,-75.191782],[37.604379,-112.156528],[34.748948,-92.276347],[32.225717,-110.967128],[48.139027,11.566799],[51.207409,3.228069],[51.505879,-.088814],[52.537891,13.206501],[53.350416,-6.260831],[53.274251,-9.050642],[41.677903,26.558588],[51.514223,-.151348],[51.514609,-.1473],[51.515256,-.141923],[51.512714,-.123622],[53.48189,-2.246513],[53.482138,-2.244276],[53.481121,-2.237945],[51.510125,-.13459],[53.406509,-2.983006],[53.40212,-2.989976],[53.961462,-1.082405],[53.744167,-.339499],[50.910312,-1.404739],[52.477067,-1.892532],[51.458471,-2.593007],[52.205088,.118993],[51.481007,-3.185849],[55.856354,-4.257498],[50.823676,-.143565],[50.820779,-.144928],[52.47755,-1.897276],[51.483559,-3.174913],[51.454934,-2.593103],[51.068747,-1.795757],[53.742757,-.337896],[53.798282,-1.538016],[53.191376,-2.885437],[53.342174,-1.778868],[53.125761,-2.075282],[53.111095,-2.021443],[53.0261,-.597654],[53.022445,-.583874],[53.109786,-1.564628],[53.200954,-1.869341],[53.078287,-.813248],[41.905815,12.482366],[43.60653,1.446398],[48.844962,2.372113],[48.844466,2.373969],[50.636349,3.068642],[52.36856,4.89237],[37.459888,-122.106177],[37.390001,-122.081569],[27.965646,-82.797204],[27.940431,-82.459961],[39.953611,-75.157286],[37.582312,-81.537124],[37.775448,-81.192638],[39.631791,-79.956654],[46.812456,-71.214226],[37.173647,-3.598236],[64.144875,-21.925058],[60.194006,11.101726],[59.913116,10.734722],[60.395087,5.320227],[23.13527,-82.358601],[46.811458,-71.203518],[39.187117,-106.817918],[39.642099,-106.377504],[37.810765,-122.262454],[43.68104,4.631309],[60.170591,24.9405],[42.051953,-70.185578],[40.517568,-74.23884],[40.503156,-74.238446],[40.719718,-74.042467],[37.78805,-122.406703],[32.70771,-117.160113],[34.072204,-118.442648],[17.49482,-88.188845],[9.933714,-84.075953],[9.932446,-84.073466],[6.247718,-75.569594],[37.769874,-122.466132],[49.002856,2.561634],[52.508044,13.390196],[38.712658,-9.137146],[55.948602,-3.198846],[51.471337,-.488455],[49.709725,.203599],[-6.191873,106.82298],[1.284562,103.843794],[1.27716,103.846934],[3.156572,101.713561],[3.148928,101.713139],[5.419358,100.336874],[18.787783,98.993187],[47.499143,19.053295],[47.498961,19.043594],[45.438247,10.992151],[47.025497,28.836446],[37.270683,-81.219403],[44.972618,-93.274619],[41.016578,28.976842],[36.953192,-81.07912],[37.794018,-79.995344],[37.1154,-81.523029],[35.919718,14.490902],[35.898955,14.513137],[35.925592,14.489313],[45.43836,12.337076],[51.899644,-8.470792],[51.893424,-8.470143],[51.220674,4.402755],[41.012069,28.968174],[37.983842,-1.129522],[38.345889,-.490583],[36.838493,-2.467233],[49.759811,6.644294],[41.369042,2.153185],[51.920557,4.471521],[51.917828,4.481114],[51.909318,4.486043],[35.169757,33.361321],[35.177031,33.362583],[34.672624,33.042195],[52.079878,4.316508],[52.093374,5.119547],[59.857792,17.637226],[55.858354,-4.256789],[59.437758,24.747365],[54.678085,25.287539],[53.551526,10.003662],[53.552748,9.985371],[49.610877,6.132504],[53.126425,-1.550322],[7.003946,100.470811],[18.787785,98.993142],[50.084407,14.418807],[40.345607,-74.657282],[-34.91553,-56.149826],[19.436069,-99.201282],[20.677334,-103.348535],[32.53589,-117.037053],[-12.086597,-77.054911],[-12.12562,-77.037381],[64.147133,-21.93667],[56.56502,-3.584648],[55.748717,37.539316],[50.107259,8.664136],[50.0017,8.259649],[-6.245407,106.783862],[-12.10194,-77.035284],[56.94995,24.111021],[54.899319,23.886286],[54.686662,25.282305],[9.934645,-84.084827],[44.642592,-63.578746],[34.410277,-119.691353],[39.109783,-94.581958],[43.675812,-79.402544],[42.330976,-83.046791],[42.33495,-83.042467],[41.310377,-72.930226],[40.880165,-74.144593],[35.71301,-83.513626],[40.767236,-111.891175],[40.762885,-111.891173],[40.782829,-124.164628],[40.79181,-124.161308],[33.793065,-117.850917],[33.65055,-117.743442],[54.972331,-1.612211],[40.755863,-73.987061],[51.05452,3.725592],[51.057226,3.724197],[51.053093,13.743622],[51.047632,13.736038],[41.043493,29.005523],[38.435716,27.142725],[39.926486,32.851705],[52.230147,21.007235],[52.233766,21.019204],[51.778657,19.451581],[2.194362,102.248778],[37.859435,27.258773],[54.319587,10.133598],[53.425096,14.551013],[53.426658,14.551908],[54.355755,18.645106],[54.351687,18.657924],[55.680233,12.584554],[36.102504,-115.172784],[40.146802,26.408075],[1.277402,103.843379],[28.638987,77.212643],[35.084196,-106.648857],[63.864719,-21.146732],[65.680938,-18.089497],[66.044033,-17.33871],[51.110222,17.031119],[45.447824,11.00287],[45.47044,9.193158],[45.442076,10.997556],[43.32083,11.330731],[36.143011,-5.353948],[31.633354,-8.009764],[31.6358,-8.014185],[21.164616,-86.828082],[23.136237,-82.350164],[42.351945,-71.045715],[42.356524,-71.062007],[42.359906,-71.055522],[34.072439,-118.403137],[40.746902,-73.890967],[39.042437,-94.588338],[28.375802,-81.549401],[32.708577,-117.170485],[34.101615,-118.342204],[51.530808,-.124167],[40.665236,-73.923154],[39.944654,-75.173487],[38.582107,-121.509237],[46.811844,-71.205451],[17.965543,102.606835],[12.252613,109.188858],[37.476939,126.958542],[37.533613,126.995612],[25.033924,121.528501],[50.450682,30.523278],[50.440884,30.519865],[46.485777,30.744335],[49.841379,24.031815],[32.085074,34.804097],[32.079276,34.814179],[38.072674,46.288203],[45.814848,15.973674],[45.808978,15.969216],[48.200712,16.366639],[48.205145,16.357962],[48.143983,17.106612],[44.81623,20.458831],[35.287811,25.461794],[37.984862,23.729605],[37.976237,23.725695],[10.768067,106.695265],[10.767933,106.691482],[10.771541,106.685692],[47.369486,8.539389],[47.372362,8.540765],[47.368113,8.541779],[46.948537,7.455155],[40.207189,-8.429548],[41.384376,2.170803],[40.785255,43.842275],[40.181553,44.516356],[40.415389,-3.707372],[31.234441,121.473618],[36.669157,117.018825],[14.550135,121.052845],[37.556874,126.923675],[37.551799,126.92139],[19.437095,-99.175993],[19.360866,-99.171099],[59.336968,18.062121],[47.919512,106.915993],[42.700648,23.319802],[34.990622,135.695719],[34.979299,135.702486],[-6.21594,106.817024],[-7.271406,112.741623],[-6.921511,107.610127],[-36.848959,174.765],[-45.032942,168.658639],[-45.028453,168.655844],[41.694176,44.801325],[41.693004,44.802453],[47.376459,8.539645],[47.461309,8.5531],[9.709667,99.98737],[52.65918,-8.625698],[52.65979,-8.630931],[-34.905205,-56.203668],[52.520769,13.394804],[52.516715,13.38224],[50.108994,8.673089],[50.114632,8.687135],[53.052505,8.786607],[39.470489,-.374087],[48.582019,7.749375],[48.582671,7.74168],[34.68997,135.188752],[45.406424,11.876775],[20.677018,-103.345899],[54.994794,-7.323219],[48.140377,11.577456],[47.502142,19.063037],[47.503663,19.057794],[47.799054,13.046022],[47.80026,13.039901],[50.627684,3.057606],[3.143387,101.710897],[50.451345,30.521428],[3.142505,101.697884],[52.259631,-7.10736],[42.15238,24.745785],[5.415749,100.338273],[48.873985,2.355155],[25.245925,55.359362],[47.85283,106.762515],[14.552831,121.022006],[14.555349,121.047607],[14.610134,121.079697],[14.608764,121.079943],[-8.709936,115.172317],[31.631764,-7.989143],[60.169099,24.951348],[59.327682,18.073115],[45.466828,9.197761],[41.889172,12.497356],[57.820236,28.331287],[32.052912,34.756247],[55.76942,37.597138],[11.553782,104.927438],[11.570447,104.927974],[25.371235,51.548602],[25.076443,55.132014],[23.139226,-82.35136],[49.609578,6.128054],[52.517142,13.388363],[52.513609,13.391304],[43.617043,-116.199558],[6.973604,80.765868],[44.873032,13.847036],[42.698479,23.322407],[46.050432,14.504685],[52.309972,4.76441],[52.37463,4.897074],[52.372196,4.899845],[14.364633,100.577465],[10.607217,104.182716],[-12.127787,-77.029669],[45.456317,12.352342],[45.453147,12.351603],[53.343416,-6.264417],[53.343352,-6.259247],[40.418219,-3.698022],[40.419749,-3.699664],[-33.439898,-70.653729],[35.743265,51.53439],[3.145715,101.696596],[3.14802,101.693805],[41.384284,2.175326],[41.14602,-8.612358],[39.358566,22.950489],[47.554701,7.589254],[48.187078,16.401773],[48.206634,16.382657],[48.211257,16.382679],[40.37332,49.842113],[55.747892,37.54423],[55.740312,37.568036],[37.79017,-122.408817],[40.179406,44.515735],[40.792014,43.846321],[42.601144,23.03071],[38.428712,27.134914],[40.987759,29.026261],[41.025634,28.974134],[41.032613,28.976447],[19.422845,-99.175447],[25.195319,55.276658],[21.421549,39.823415],[21.419891,39.822646],[38.429822,27.141838],[19.433671,-99.153165],[48.867317,2.313171],[48.864268,2.300615],[52.523541,13.402607],[6.24745,-75.56776],[13.737379,100.560465],[13.744176,100.542219],[45.42814,-75.692757],[45.419344,-75.677515],[54.976918,-1.5783],[48.296206,14.292041],[-34.558585,-58.449412],[52.012684,4.357001],[52.00773,4.362709],[53.547335,9.988931],[53.549271,9.962473],[55.749838,37.629159],[55.747263,37.581945],[59.943531,30.360787],[46.487965,30.740834],[40.42025,-3.703497],[38.342286,-.479729],[43.772425,11.249106],[-22.949995,-43.190889],[37.570244,126.986086],[37.531558,126.970038],[-8.694334,115.16817],[29.54872,34.967616],[35.147698,126.918234],[36.329111,127.427846],[37.44969,126.450034],[39.12704,117.198294],[34.759984,135.547326],[35.566335,139.510523],[35.924751,139.481052],[35.922464,139.482805],[31.955046,35.93017],[13.72281,100.518497],[32.054347,34.750746],[7.884953,98.386722],[11.559394,104.920009],[14.629813,120.9956],[3.150125,101.709812],[-6.216883,106.819136],[14.557171,121.01807],[12.925641,100.867546],[18.78755,99.00321],[51.919593,4.476584],[48.211259,16.368293],[53.344223,-6.264266],[37.173825,-3.593123],[43.679389,-79.342533],[34.091974,-118.380364],[52.405285,16.931222],[41.046951,-73.542029],[40.734081,-74.165544],[33.742571,-118.10395],[-22.90479,-43.174106],[-22.905475,-43.176984],[2.199277,102.248232]];    var current_room_name = "";
    // timeout_intervals = {}

    // timeout_intervals = {}
    //[//console.log('made socket connection', socket.id);
      socket.on('create_room', function(data) {
        //[//console.log('CREATION')
        //[//console.log(data)
        //[//console.log(data['room_id'])
        temproomid = String(data['room_id'])
        socket.join(temproomid)
        socket.occupy = temproomid
        const room = io.sockets.adapter.rooms[data['room_id']]
        //[//console.log(room.sockets)
        //[//console.log(room.sockets)
        //[//console.log(room)
        io.to(String(data['room_id'])).emit('lobby', {        
            host_name: data['username'],
            host_id: data['user_id_1'],
            host_chose_time: data['time'],
            // host_chose_player_count: data['player_lim'],
            room_id: data['room_id'],
            room_list: room.sockets
        })
        socket.nickname = data['username'];
        socket.color = "red"
        //[//console.log('Nickname: ' + String(socket.nickname))
        // //[//console.log(data["room_id"].sockets)
        //[//console.log('above')
      });
// Check if user is still in waiting room by setting attribute to the socket and when video is loadded set that attribute to false. Then when you check everyone's cscore, you check that attribute
      socket.on('join_room', function(data) {
      	try {
        colors = ['violet', 'orange','cyan','purple','pink','blue','yellow']
        already_used_colors = []
        // socket.color = mycolor
        //[//console.log('Join Room existance')
        var socket_existance = io.sockets.adapter.rooms[data["room_id"]]
        //[//console.log(socket_existance)
        socket.joinaroom = 1;
        if(socket_existance == undefined) {
            //[//console.log('Room does not yet exist..')
            io.to(data["userid"]).emit('room-dont-exist', 'dont exist!!!');
            return;
        }
        filter = new Filter();
        if(filter.clean(data["username"]) != data["username"]) {
            io.to(data["userid"]).emit('profanity', 'dont exist!!!');
        	return;
        }
        temp_room_id = String(data["room_id"])
            const room = io.sockets.adapter.rooms[data['room_id']]
            // //[//console.log(Object.keys(data['room_id']).length)
            //[//console.log(room.length)
        var clients = io.sockets.adapter.rooms[data["room_id"]].sockets;   
        inclients = 0;
        // socket.ishost = socket.id;
        for (var clientId in clients ) {
            socket_corresponder = io.nsps['/'].connected[String(clientId)]
            if(String(data["username"]) == socket_corresponder.nickname) {
                //[//console.log('INCLIENTSSSZ')
                    inclients++
            }
            if(String(data["username"]) != socket_corresponder.nickname) {
                already_used_colors.push(socket_corresponder.color)
            }

        }
        if(inclients>=1) {
            io.to(data["userid"]).emit('room-duplicate','room-duplicate-alert')        
            return;
        }
        newcolors = colors
        for(var num=0;num<already_used_colors.length;num++) {
            indexcolor = newcolors.indexOf(already_used_colors[num]);
            if (indexcolor !== -1) {
              newcolors.splice(String(colors[num]), 1);
            }
        }
        //console.log(newcolors)
        globalcolor = "";
        if(newcolors != []) {
            addedcolor = newcolors[Math.floor(Math.random() * newcolors.length)]
            //console.log('added color')
            //console.log(addedcolor)
            socket.color = addedcolor
            globalcolor = addedcolor
        } else {
            mycolor = colors[Math.floor(Math.random() * colors.length)]
            socket.color = mycolor
            //console.log('old color')
            //console.log(mycolor)
            globalcolor = mycolor
        }
        // //console.log()
        // //[//console.log('room.sockets')
        // //[//console.log(room.sockets)
        console.log('Room Length: ' + String(Object.keys(room.sockets).length))
        console.log('Room ID:' + String(data["room_id"]))
        if(socket_existance != undefined && Object.keys(room.sockets).length < 170) {
            socket.join(temp_room_id)
            socket.occupy = temp_room_id
            //[//console.log("DATA LOOK:")
            //[//console.log(data["room_id"])
            //[//console.log(data["username"])
            //[//console.log(data["userid"])
            io.to(temp_room_id).emit('user-join', {
                room_id: data["room_id"],
                username: data["username"],
                userid: data["userid"],
                room_list: room.sockets
            })
            socket.nickname = data['username'];
            //[//console.log('Username:' + String(socket.nickname))
            io.to(socket.id).emit('color-change', {
            	color: globalcolor	
            })
        } else if(room.length >= 10) {
            io.to(data["userid"]).emit('room-full','room-fill-alert')
        }
        color_check = io.nsps['/'].connected[String(socket.id)]
    	} catch(err) {
    		console.log(err)
    	}
        // //console.log('JOIN COLOR: ' + color_check.color)
//to get the number of clients
// var numClients = (typeof clients !== 'undefined') ? Object.keys(clients).length : 0;
      })
  socket.on('disconnecting', () => {
    //[//console.log('IM DISCONNECTING!!')
    let temp_obj = Object.keys(io.sockets.adapter.sids[socket.id])
    //[//console.log(temp_obj[0])
    //[//console.log('above lmoa')
            const room = io.sockets.adapter.rooms[temp_obj[0]]
            //[//console.log(room.sockets)
            //[//console.log('EXIT GUESS EMITING')
            let room_obj = Object.keys(io.sockets.adapter.sids[socket.id])

            // io.to(room_obj[0]).emit('exit-guess', {
            //     bruh: "bruh"
            // })
            room_list = room.sockets
            // //[//console.log(room_list)
            for (var key in room.sockets){
                const socket_corresponder = io.nsps['/'].connected[String(key)]
                //[//console.log(socket_corresponder.nickname)
                room_list[key] = socket_corresponder.nickname
            }
            delete room_list[socket.id];
            //[//console.log(room_list)
            io.to(temp_obj[0]).emit('change-num-of-players', {
                room_list: room_list
            })
            // socket_corresponder = io.nsps['/'].connected[String(socket.id)]
              });
      socket.on('begin_game', function(data) {
      	try {
        //console.log("BEGIN GAME -=-=-=-=-")
        var current_round = data["host_round"]
        //[//console.log('Begin Game Socket Username: ' + String(socket.nickname))
        //[//console.log('Begin Game Socket')
        let room_obj = Object.keys(io.sockets.adapter.sids[socket.id])
        if(Object.keys(io.nsps['/'].adapter.rooms[room_obj[0]].sockets).length < 2) {
        	//console.log('Only one player waiting..')
        		io.to(String(socket.id)).emit('one-person')
        	return;
        }
        //[//console.log(room_obj[0])
        //[//console.log('USI')
        //[//console.log('USER SOCKET DATA BELOW:')
        //[//console.log(data["user_socket_id"])
        const room_begin_game = io.sockets.adapter.rooms[room_obj[0]]
        //[//console.log(room_begin_game)
        socket_list = room_begin_game.sockets;
        //[//console.log(room_begin_game.sockets)
        var active_json = {};
        //[//console.log('-=-')
        //[//console.log(room_begin_game)
        //[//console.log(room_obj[0])
        //[//console.log('===')
        active_json = {}
        // //[//console.log(socket)
 //        // //[//console.log(socket.nickname)
        socket.ishost = socket.id;
        random_num = Math.floor(Math.random() * 860) + 1  
         for (socketID in io.nsps['/'].adapter.rooms[room_obj[0]].sockets) {
            const nickname = io.nsps['/'].connected[socketID].nickname;
            // io.nsps['/'].connected[socketID].nickname
            io.nsps['/'].connected[socketID].joinaroom = 0;
            io.nsps['/'].connected[socketID].random_num = random_num
            //[//console.log(nickname)
            //[//console.log('above is nickname')
            if(io.nsps['/'].connected[socketID].lscore == undefined) {
                active_json[socketID] = [nickname, 0, io.nsps['/'].connected[socketID].color]
            } else {
                active_json[socketID] = [nickname, io.nsps['/'].connected[socketID].lscore, io.nsps['/'].connected[socketID].color]               
            }
        }
        // //[//console.log(active_json)
        // //[//console.log('active JSON PRINTOUT')
        //   //[//console.log('join room after start')
        // //[//console.log(active_json)
        // //[//console.log('ALL EXISTING ROOMS:')
        // //[//console.log(io.sockets.adapter.rooms)
        
        // // asdfasdf //
        // socket.random_num = random_num
        // temporary = Object.keys(io.sockets.adapter.sids[socket.id])
        // // //[//console.log(temp_obj[0])
        // // //[//console.log('above lmoa')
        // current_room = io.sockets.adapter.rooms[temporary[0]]
        // //[//console.log(current_room.sockets)
        // //[//console.log('EXIT GUESS EMITING')
        // room_list = room.sockets
        // for (var key in room.sockets){
        //         set_random_num_corresponder = io.nsps['/'].connected[String(key)]
        //         set_random_num_corresponder.random_num = random_num
        //         // //[//console.log(socket_corresponder.nickname)
        //         // room_list[key] = socket_corresponder.nickname
        // }
          if (data["time_per_guess"] == "1 minute 30 seconds") {
            //console.log(' i am cool')
            serverleft = 90;
          } else if(data["time_per_guess"] == "1 minute") {
            serverleft = 60
          } else if(data["time_per_guess"] == "2 minutes") {
            serverleft = 120
          } else if(data["time_per_guess"] == "3 minutes") {
            serverleft = 180
          } else if(data["time_per_guess"] == "4 minutes") {
            serverleft = 240
          } else if(data["time_per_guess"] == "5 minutes") {
            serverleft = 300
          }
          if(data["time_per_guess"] == "15 seconds") {
            serverleft = 15;
          }
          temp_socket_corresponder = io.nsps['/'].connected[socket.id]
          roomname = temp_socket_corresponder.occupy
          timeout_intervals[String(roomname)] = setTimeout(function() {
          	try {
          	//console.log(timeout_intervals)
          	//console.log('Round Over')
		    //console.log("FORCE GUESS -=-=-=-=-=-=-==- 1234xD")
		    //console.log('arrival1')
		    oom_obj = Object.keys(io.sockets.adapter.sids[socket.id])
		    oom_obj = oom_obj[0]
		    temporary_corresponder = io.nsps['/'].connected[socket.id]
		    //console.log(temporary_corresponder.nickname)
		    if(String(socket.id) == String(temporary_corresponder.ishost)) {
		        temporary_corresponder.nickname
		        //console.log('arrival2')
		        transmit_json = {}
		        for (socketID in io.nsps['/'].adapter.rooms[oom_obj].sockets) {
		            const socket_corresponder = io.nsps['/'].connected[socketID]
		            const current_guess_coords = socket_corresponder.gpoint;
		           	if(socket_corresponder.joinaroom == 1) {
		            	continue;
		            }
		            if(socket_corresponder.lscore != undefined) {
		                if(socket_corresponder.cscore != undefined) {
		                    socket_corresponder.lscore = parseInt(socket_corresponder.lscore) + parseInt(socket_corresponder.cscore)
		                }
		                //[//console.log('socket l-score 1')
		                //[//console.log(socket_corresponder.lscore)
		                //[//console.log(socket_corresponder.cscore)
		                //[//console.log(parseInt(socket_corresponder.lscore) + parseInt(socket_corresponder.cscore))
		            } else {
		                socket_corresponder.lscore = 0
		                if(socket_corresponder.cscore == undefined) {
		                    socket_corresponder.cscore = 0
		                } else {
		                    socket_corresponder.lscore = socket_corresponder.cscore
		                }
		            }
		            //console.log('CSCORE and socket_corresponder')
		            //console.log(socket_corresponder.ontime)
		            //console.log(socket_corresponder.cscore)
		            if(socket_corresponder.cscore != 0) {
		            transmit_json[String(socketID)] = [socket_corresponder.cscore, socket_corresponder.gpoint, socket_corresponder.nickname, socket_corresponder.dbetween, socket_corresponder.lscore, socket_corresponder.ishost, "ontime", socket_corresponder.color]
		            } else {
		                // used to be: } else if(socket_corresponder.cscore != undefined) {
		            transmit_json[String(socketID)] = [0, "away", socket_corresponder.nickname, "away", socket_corresponder.lscore, socket_corresponder.ishost, "late", socket_corresponder.color]
		            }
		            //[//console.log('Transmitted Json:')
		            socket_corresponder.cscore = undefined;
		            socket_corresponder.gpoint = undefined;
		        } 
		        io.to(String(oom_obj)).emit('finished-guessing', {        
		            transmit_json: transmit_json
		        })
		    }
		    //console.log("ASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDF")
			} catch(err) {
				console.log(err)
			}
          },parseInt(serverleft+5)*1000)
          //console.log('interval detect')
          //console.log(timeout_intervals)
          // timeout_intervals[String(socket.id)] = vsc
          //console.log('err:' + parseInt(serverleft + 5))
          // right here start a timer for time + 5

          //
        io.to(String(room_obj[0])).emit('start-game-notify', {        
            player_info: active_json,
            room_contents: room_begin_game,
            current_round: current_round,
            rounds: parseInt(data["rounds"]),
            t_p_g: data["time_per_guess"],
            random_num: random_num
        })
       } catch(err) {
       		console.log(err)
       }
      })
  socket.on('disconnect', () => {
    // //[//console.log('GUESS EXITING!!!!!!')
    // io.to(String(socket.id)).emit('exit-guess')
  });
  socket.on('server-ping', function() {
    //console.log('Server Pinged!')
  })
  socket.on('current_score', function(data) {
  	try {
    function distance_func(lat1, lon1, lat2, lon2, unit) {
      if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
      }
      else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
      }
    }
    guessing_point = data["guessing_point"]
    socket_corresponder2 = io.nsps['/'].connected[socket.id]
    video_number_lat_lon = socket_corresponder2.random_num
    correct_coordinates = usa_lat_lon[video_number_lat_lon]
    oom_obj = Object.keys(io.sockets.adapter.sids[socket.id])
    oom_obj = oom_obj[0]
    try {
    distance_between = distance_func(guessing_point[0], guessing_point[1], correct_coordinates[0], correct_coordinates[1], "m")
    function score_grader(val) {
        ex = parseInt(Math.round(14.46 * (11.52 - Math.log(val))))
        return ex * 5
    }
    current_grade = score_grader(distance_between)
    current_grade = Math.round(current_grade)
    } catch {
        current_grade = undefined
    }
    socket.cscore = current_grade
    //console.log('CHECK GRADE')
    //console.log(current_grade)
    //console.log(socket_corresponder2.nickname)
    if(data["ran_out_of_time"] == false && data["forced"] != true) {
    //console.log('Guess Was Not Forced')
    // above was added
        //[//console.log('guess was not forced')
    socket.gpoint = data["guessing_point"]
    socket.dbetween = data["distance_between"]
    socket.ontime = 'true'
    // //[//console.log(socket.cscore)
    } else {
        //console.log('Guess Was Forced')
        socket.ontime = 'false'
        socket.cscore = 0
    }
    if(current_grade != undefined) {
        socket.cscore = current_grade
    }
    is_undefined = false;
        for (socketID in io.nsps['/'].adapter.rooms[oom_obj].sockets) {
            if(io.nsps['/'].connected[socketID].joinaroom == 0) {


            const current_cscore = io.nsps['/'].connected[socketID].cscore;
            //[//console.log(io.nsps['/'].connected[socketID].nickname)
            if(current_cscore == undefined) {
                is_undefined = true;
            }
            //[//console.log(current_cscore)
            //[//console.log('ABOVE is current cscore')
            }
        }
    //[//console.log('is undefined? ' + String(is_undefined))
    transmit_json = {}
    //console.log('Before isundefined == false')
    //console.log(is_undefined)
    allowUpdate = 0;
    if(is_undefined == false) {
    	//console.log(' I am USA ')
        for (socketID in io.nsps['/'].adapter.rooms[oom_obj].sockets) {
            const socket_corresponder = io.nsps['/'].connected[socketID]
            //[//console.log(socket_corresponder)
            const current_guess_coords = socket_corresponder.gpoint;
		    if(socket_corresponder.joinaroom == 1) {
		        continue;
		    }
            //console.log('CSCORE and socket_corresponder')
            //console.log(socket_corresponder.cscore)
            //console.log(socket_corresponder.lscore)
            if(socket_corresponder.lscore != undefined) {
                if(socket_corresponder.cscore != undefined) {
                    socket_corresponder.lscore = parseInt(socket_corresponder.lscore) + parseInt(socket_corresponder.cscore)
                }
                //[//console.log('socket l-score 1')
                //[//console.log(socket_corresponder.lscore)
                //[//console.log(socket_corresponder.cscore)
                //[//console.log(parseInt(socket_corresponder.lscore) + parseInt(socket_corresponder.cscore))
            } else {
                socket_corresponder.lscore = 0
                if(socket_corresponder.cscore == undefined) {
                    socket_corresponder.cscore = 0
                } else {
                    socket_corresponder.lscore = socket_corresponder.cscore
                }
                //[//console.log('socket l-score 2')
                //[//console.log(socket_corresponder.lscore)
                //[//console.log(socket_corresponder.cscore)
                //[//console.log(socket_corresponder.cscore)
            }
            //console.log(socket_corresponder.nickname)
            //console.log(socket_corresponder.ontime)
            //console.log(socket_corresponder.cscore)
            if(socket_corresponder.cscore != 0) {
            transmit_json[String(socketID)] = [socket_corresponder.cscore, socket_corresponder.gpoint, socket_corresponder.nickname, socket_corresponder.dbetween, socket_corresponder.lscore, socket_corresponder.ishost, "ontime", socket_corresponder.color]
            } else {
                // used to be: } else if(socket_corresponder.cscore != undefined) {
            transmit_json[String(socketID)] = [0, "away", socket_corresponder.nickname, "away", socket_corresponder.lscore, socket_corresponder.ishost, "late", socket_corresponder.color]
            }
            //[//console.log('Transmitted Json:')
            socket_corresponder.cscore = undefined;
            socket_corresponder.gpoint = undefined;
        }   
        //[//console.log('Transmitted below:')
        //[//console.log(transmit_json)
        // clearTimeout(vsc); 
        socket_corresponder = io.nsps['/'].connected[String(socket.id)]
        //console.log('Occupy:')
        //console.log('THIS RUN OKAY!!')
        //console.log(socket_corresponder.occupy)
        //console.log(timeout_intervals)
        //console.log(timeout_intervals[String(socket_corresponder.occupy)])
        clearTimeout(timeout_intervals[String(socket_corresponder.occupy)])
        //console.log('AFTER "CLEAR"...')
        //console.log(timeout_intervals)
        allowUpdate = 1
        // }
        io.to(String(oom_obj)).emit('finished-guessing', {        
            transmit_json: transmit_json
        })
        console.log('Transmitted:')
        console.log(transmit_json)
        //[//console.log('RUNNING BELOW')
    } else {
        io.to(String(oom_obj)).emit('update-guess', {        
            nickname: socket.nickname,
            socket_id: socket.id,
            intentional_exit: data["intentional_exit"],
            distance: data["distance_between"],
            allowUpdate: allowUpdate,
        })
    }
    } catch(err) {
    	console.log(err)
    }
  })

  socket.on('check_host', function(data) {
    const host_corresponder = io.nsps['/'].connected[data["host_or_not_socket_id"]]
    if(host_corresponder.ishost == data["host_or_not_socket_id"]) {
        // io.to(String(oom_obj)).emit('check_host_verify', {        
            // hostornot: "true";
        // })   
        //[//console.log(host_corresponder.nickname)
        //[//console.log('^ is the game host')
        io.to(String(data["host_or_not_socket_id"])).emit('check_host_verify', 'You are the host');
    }
  })
  socket.on('un-waiting-room', function(data) {
    socket.joinaroom = 0;
    // const host_corresponder = io.nsps['/'].connected[data["host_or_not_socket_id"]]
    // if(host_corresponder.ishost == data["host_or_not_socket_id"]) {
    //     // io.to(String(oom_obj)).emit('check_host_verify', {        
    //         // hostornot: "true";
    //     // })   
    //     //[//console.log(host_corresponder.nickname)
    //     //[//console.log('^ is the game host')
    //     io.to(String(data["host_or_not_socket_id"])).emit('check_host_verify', 'You are the host');
    // }
  })
  socket.on('disconnect-socket', function() {
    socket.disconnect();
    //[//console.log('socket disconnected!')
  })
  socket.on('end-round', function(data) {
  	try {
    //console.log("END ROUND --=-=-=-=--=-=-")
    //[//console.log('END ROUND SOCKETS:')
    //[//console.log(io.nsps['/'].adapter.rooms[oom_obj].sockets)
    if(data["potential_host_id"] == io.nsps['/'].connected[data["potential_host_id"]].ishost) {
          	//console.log('FORCE ROUND OVERRR Over')
		    //console.log("FORCE GUESS -=-=-=-=-=-=-==-")
		    //console.log('arrival1')
		    oom_obj = Object.keys(io.sockets.adapter.sids[socket.id])
		    oom_obj = oom_obj[0]
		    temporary_corresponder = io.nsps['/'].connected[socket.id]
		    if(String(socket.id) == String(temporary_corresponder.ishost)) {
		        temporary_corresponder.nickname
		        //console.log('arrival2')
		        transmit_json = {}
		        for (socketID in io.nsps['/'].adapter.rooms[oom_obj].sockets) {
		            const socket_corresponder = io.nsps['/'].connected[socketID]
		            const current_guess_coords = socket_corresponder.gpoint;
		            if(socket_corresponder.joinaroom == 1) {
		            	continue;
		            }
		            if(socket_corresponder.lscore != undefined) {
		                if(socket_corresponder.cscore != undefined) {
		                    socket_corresponder.lscore = parseInt(socket_corresponder.lscore) + parseInt(socket_corresponder.cscore)
		                }
		                //[//console.log('socket l-score 1')
		                //[//console.log(socket_corresponder.lscore)
		                //[//console.log(socket_corresponder.cscore)
		                //[//console.log(parseInt(socket_corresponder.lscore) + parseInt(socket_corresponder.cscore))
		            } else {
		                socket_corresponder.lscore = 0
		                if(socket_corresponder.cscore == undefined) {
		                    socket_corresponder.cscore = 0
		                } else {
		                    socket_corresponder.lscore = socket_corresponder.cscore
		                }
		            }
		            //console.log('CSCORE and socket_corresponder')
		            //console.log(socket_corresponder.ontime)
		            //console.log(socket_corresponder.cscore)
		            if(socket_corresponder.cscore != 0) {
		            transmit_json[String(socketID)] = [socket_corresponder.cscore, socket_corresponder.gpoint, socket_corresponder.nickname, socket_corresponder.dbetween, socket_corresponder.lscore, socket_corresponder.ishost, "ontime", socket_corresponder.color]
		            } else {
		                // used to be: } else if(socket_corresponder.cscore != undefined) {
		            transmit_json[String(socketID)] = [0, "away", socket_corresponder.nickname, "away", socket_corresponder.lscore, socket_corresponder.ishost, "late", socket_corresponder.color]
		            }
		            //[//console.log('Transmitted Json:')
		            socket_corresponder.cscore = undefined;
		            socket_corresponder.gpoint = undefined;
		        } 
		        io.to(String(oom_obj)).emit('finished-guessing', {        
		            transmit_json: transmit_json
		        })
		    }
        socket_corresponder = io.nsps['/'].connected[String(socket.id)]
        clearTimeout(timeout_intervals[String(socket_corresponder.occupy)])
    }
	} catch(err) {
		console.log(err)
	}
  })
  // socket.on('fartmaster', function(data) {
  //   //[//console.log('FARTMASTER DDETECTEEDDEDED!!@#$&*!^@#$')
  // })

});
