

var getchnl = new Array();


getchnl = [ 
	<!-- news -->
	["Welcome", "welcome", "img/radio-channel-BACKGROUND_latest_latest.jpg","https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/ambience_bar_small_busy_r&b_music.mp3?_=8"],

	["Aaj Tak", "news", "https://akm-img-a-in.tosshub.com/aajtak/resource/img/bemisaal-20-saal/aajtak_livetv_fbshare_thumbnail-647X404.png","https://aajtaklive-amd.akamaized.net/hls/live/2014416/aajtak/aajtaklive/aajtak_5/chunklist.m3u8"],
		
		
	["Aaj Tak HD", "news", "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d67f1076555179.5c6d4e838c624.jpg","https://aajtakhdlive-amd.akamaized.net/hls/live/2014415/aajtakhd/aajtakhdlive/aajtakhd_5/chunklist.m3u8"],

	["ABP Hindi", "news", "https://i.ytimg.com/vi/3JFY7-yGKKU/maxresdefault.jpg","https://abp-i.akamaihd.net/hls/live/765529/abphindi/master.m3u8"], 

	["Zee News", "news", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-9-zeenews/list/09zeenewszeenews_484035579.jpg", "https://d233nwklwv8p4.cloudfront.net/out/v1/860cb318d23a4c64b58c9d625281170c/index_6.m3u8"],
		
	["Khabrain Abhi Tak", "news", "https://static.vidgyor.com/live/midroll/assets/khabrainabhitak.png", "https://vidcdn.vidgyor.com/kat-origin/liveabr/playlist.m3u8"],
	
	//["NDTV India", "news", "https://nationalviews.com/wp-content/uploads/2019/08/ndtv-india.jpg","https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/masterp_480p@3.m3u8"],
	
	//["NDTV 24x7", "news", "https://nationalviews.com/wp-content/uploads/2019/08/ndtv-india.jpg","https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/masterp_480p@3.m3u8"],
	
	["News24", "news", "https://static.vidgyor.com/live/midroll/assets/news24.png", "https://vidcdn.vidgyor.com/news24-origin/liveabr/playlist.m3u8" ],
	
	["Tez", "news", "https://i.pinimg.com/736x/44/ac/cb/44accb7a09435399b818eff2957e9946.jpg", "https://tezlive-amd.akamaized.net/hls/live/2016145/tez/tezlive/tez_5/chunklist.m3u8"],

	
	
//["News 18 Lokmat", "news", "https://i.ytimg.com/vi/K58gphtBDmI/maxresdefault.jpg", "https://news18lokmat-lh.akamaihd.net/i/n18lokmat_1@178974/index_5_av-p.m3u8 "],

//	["Republic Bharat", "news", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-9-162/list/09162republicbharat.jpg", "https://republic.pc.cdn.bitgravity.com/live/bharat_hls/masterlive_360p.m3u8"],

	//["Republic World", "news", "https://bharat.republicworld.com/assets/images/r_logo_1024x1024.png", "https://weblive.republicworld.com/liveorigin/republictv/master_hdlive_360p.m3u8"],

	["NewsX", "news", "https://i.ytimg.com/vi/XSPkzOhZ7LU/maxresdefault.jpg", "https://m-c16-j2apps.s.llnwi.net/hls/0380.NewsX.in_480p/index.m3u8"],

	["IBC24", "news", "https://i.ytimg.com/vi/Cd7034442Rw/maxresdefault.jpg", "https://m-c18-j2apps.s.llnwi.net/hls/0519.IBC24.in_480p/index.m3u8"],

	["Total News", "news", "https://mlmqyxhfvgrm.i.optimole.com/YC75iXI-FnrJQgrq/w:auto/h:auto/q:auto/https://livetvmania.net/wp-content/uploads/2018/01/Total-Tv-Live.jpg", "https://m-c049-j2apps.s.llnwi.net/hls/0131.TotalTV.in_480p/index.m3u8"],


//	["News India", "news", "", "https://m-c16-j2apps.s.llnwi.net/hls/3240.NewsIndia24X7.in_480p/index.m3u8"],

	["News 18 India", "news", "https://i.ytimg.com/vi/rNo9tuQMuCM/maxresdefault.jpg", "https://news18india-lh.akamaihd.net/i/news18india_1@174951/index_5_av-p.m3u8"],


	["India TV", "news", "https://www.livelaw.in/h-upload/2019/02/05/358091-india-tv.jpg", "https://m-c02-j2apps.s.loris.llnwd.net/hls/0091.IndiaTV.in_480p/index.m3u8"],
	
	["India Today", "news", "https://static.vidgyor.com/live/midroll/assets/indiatoday.png", "https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/indiatoday_5/chunklist.m3u8"],

	["India News", "news", "", "https://m-c036-j2apps.s.llnwi.net/hls/0442.IndiaNews.in.m3u8"],
	
	["News 1 India", "news", "https://pbs.twimg.com/profile_images/1185084861/logo.jpg", "https://m-c18-j2apps.s.llnwi.net/hls/7043.News1India.in_480p/index.m3u8"],
	
//	["Rajasthan Patrika", "news", "https://i.ytimg.com/vi/1xm6YO2zxJY/maxresdefault.jpg", "https://www.youtube.com/embed/Ooyoyo_OqZs"],

//	["Jan TV", "news", "https://qqcdnpictest.mxplay.com/pic/7078.JanTV.in/en/1x1/208x208/test_pic1596355844398.jpg", "https://m-c010-j2apps.s.llnwi.net/hls/7078.JanTV.in_480p/index.m3u8"],

	["News 36", "news", "https://pbs.twimg.com/profile_images/1050032614407659527/TfEinCRg.jpg", "https://m-c06-j2apps.s.llnwi.net/hls/7079.News36.in_480p/index.m3u8"],

	["MH1 Prime", "news", "https://static.wikia.nocookie.net/logopedia/images/b/bf/MH_One.jpg/revision/latest?cb=20180625063419", "http://rtmp.smartstream.video:1935/mhonenews/mhonenews/playlist.m3u8"],
	
	["Bharat Samachar", "news", "https://yt3.ggpht.com/ytc/AAUvwnj78Ao6Ymwf2BEgbcn_0AcWAmgnJt1o5eNIfoO9aw=s900-c-k-c0x00ffffff-no-rj", "https://m-c05-j2apps.s.llnwi.net/hls/7060.BharatSamachar.in_480p/index.m3u8"],

	["Mirror Now", "news", "https://timesofindia.indiatimes.com/photo/57872133.cms","https://mbnowweb-lh.akamaihd.net/i/MRN_1@346545/index_576_av-p.m3u8?sd=10&rebase=on"],

	["Samachar Today", "news", "https://images.jdmagicbox.com/comp/muzaffarnagar/h6/9999px131.x131.170409220001.s1h6/catalogue/samachar-today-news-channel-jhansi-ki-rani-muzaffarnagar-uswmnjj.jpg", "https://m-c010-j2apps.s.llnwi.net/hls/7090.SamacharNews.in_480p/index.m3u8"],

//	["Sudarshan News", "news", "https://media-exp1.licdn.com/dms/image/C511BAQGJC2RXsYVxgw/company-background_10000/0/1559202816158?e=2159024400&v=beta&t=yGSwFoZpnrcrGMt_CH-1aaQAWkGWsZ0-nkloBt8mXpc", "https://m-c010-j2apps.s.llnwi.net/hls/7091.Sudarsahn.in_480p/index.m3u8"],
	
["Amarujala", "news", "https://spiderimg.amarujala.com/assets/images/2018/01/14/750x506/amar-ujala-live-tv_1515919728.jpeg", "https://streamcdn.amarujala.com/live/smil:stream1.smil/playlist.m3u8"],
	
	["Today News", "news", "", "https://m-c28-j2apps.s.llnwi.net/hls/8003.Today24.in_480p/index.m3u8"],
	
	["Darpan News", "news", "", "https://m-c29-j2apps.s.llnwi.net/hls/8036.PTNews.in_480p/index.m3u8"],

	
["TV9 Bharatvarsh", "news", "https://static.vidgyor.com/live/midroll/assets/tv9bharatvarsh.png", "https://vidcdn.vidgyor.com/tv9bharatvarsh-origin/live/tv9bharatvarsh-origin/live1/chunks.m3u8"],


	//["DD National", "news", "https://smartdigitalnews.com/wp-content/uploads/2020/04/DD.png", "https://m-c036-j2apps.s.llnwi.net/hls/0098.DDNational.in_480p/index_dvr.m3u8"],
	
	["DD Bharati", "news", "https://www.sentinelassam.com/wp-content/uploads/2020/03/DDj.jpg","https://m-c049-j2apps.s.llnwi.net/hls/0178.DDBharati.in_480p/index_dvr.m3u8"],
	
	//["DD Sports", "news", "https://www.sentinelassam.com/wp-content/uploads/2020/03/DDj.jpg","https://m-c048-j2apps.s.llnwi.net/hls/0179.DDSports.in_480p/index.m3u8"],
	
	["DD India", "news", "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/06/19/838509-dd-india-logo.jpg", "https://m-c15-j2apps.s.llnwi.net/hls/0180.DDIndia.in_480p/index.m3u8"],

	["DD Sports", "news", "", "https://m-c25-j2apps.s.llnwi.net/hls/0179.DDSports.in_480p/index.m3u8"],
	
	["DD Retro", "news", "", "https://m-c037-j2apps.s.llnwi.net/hls/7041.DDRetro.in_480p/index_dvr.m3u8"],

	["DD Arunprabha", "news", "", "https://m-c037-j2apps.s.llnwi.net/hls/8059.DArunprabha.in_480p/index.m3u8"],
	
	//["DD News", "news", "https://smartdigitalnews.com/wp-content/uploads/2020/04/DD.png", "https://m-c048-j2apps.s.llnwi.net/hls/0182.DDNews.in_480p/index.m3u8"],

	
	//["DD Bharti", "news", "","http://14.199.164.20:4001/play/a0u0/index.m3u8"],

	//["DD National 1", "news", "https://www.sentinelassam.com/wp-content/uploads/2020/03/DDj.jpg","http://103.199.161.254/Content/ddnational/Live/Channel(DDNational)/index.m3u8"],


	
	//["Lok Sabha TV", "news", "https://yt3.ggpht.com/ytc/AKedOLR2NCiHpGI_1wc4smCcL9LcKOpnluUoHzlhpZf_Kg=s900-c-k-c0x00ffffff-no-rj", "https://m-c16-j2apps.s.llnwi.net/hls/0275.LoksabhaTV.in_360p/index.m3u8"],
	
	//["Rajya Sabha TV", "news", "https://yt3.ggpht.com/ytc/AKedOLRiXWhvPfnYTyLgSXQuJMjKKe745rRrIslgpyCRKw=s900-c-k-c0x00ffffff-no-rj", "https://m-c16-j2apps.s.llnwi.net/hls/0285.RSTV.in_480p/index.m3u8"],
	
	//["Sahara Samay MP", "news", "https://d229kpbsb5jevy.cloudfront.net/st-ak/yupptv/og_image/saharasamay_Mdyapradesh.jpg", "https://yuppmslukmo1.akamaized.net/hls/live/2009218/samaymp/samaymp/samaymp_1800/chunklist.m3u8?hdntl=exp=1625252445~acl=!*/samaymp/samaymp/*!/payload/yuppTVCom_5_-1_d3d1e048e91148d6_IN_122.161.53.147/*~data=hdntl~hmac=e546a272324e72cd26894a1012c89075c86b2f61a2c6422dfd3f77d9599fccaf"],

["Sahara Samay", "news", "https://pbs.twimg.com/profile_images/1265966831019323393/R7IFUKrs.jpg", "https://m-c03-j2apps.s.llnwi.net/hls/0184.Samay.in_480p/index.m3u8"],

["Swaraj Express", "news", "https://pbs.twimg.com/profile_images/1265966831019323393/R7IFUKrs.jpg", "https://live.wmncdn.net/highnews/swaraj.stream/index.m3u8"],



	//["Sadhana MP", "news", "https://lh3.googleusercontent.com/IR3q1Z82yKUP5q8atn01HJ5_1VPXEPC6YZp6ymQDsLSsxn8Pegp9r5VmabHuf1NG-T40", "https://m-c02-j2apps.s.loris.llnwd.net/hls/1647.SadhnaMPChattisgarh.in_480p/index.m3u8"],

//	["Sadhana Plus", "news", "https://lh3.googleusercontent.com/IR3q1Z82yKUP5q8atn01HJ5_1VPXEPC6YZp6ymQDsLSsxn8Pegp9r5VmabHuf1NG-T40","https://m-c03-j2apps.s.llnwi.net/hls/4380.SadhnaPlus.in.m3u8"],
		
	//["Hindi Khabar", "news", "https://upload.wikimedia.org/wikipedia/commons/6/6b/Hindi_Khabar.png", "https://m-c02-j2apps.s.loris.llnwd.net/hls/5208.HindiKhabar.in_480p/index.m3u8"],
	
	//["NDTV Profit", "news", "https://cdn.ndtv.com/static/images/ndtv_profit_default_image_livetv.png", "https://ndtv.pc.cdn.bitgravity.com/ndtv/live/amlst:ndtv_profit_,48,128,256,382,512,.smil/chunklist_b512000.m3u8"],

	//["CNBC TV18", "news", "https://www.cnbctv18.com/assets/images/logo-600x314.jpg", "https://cnbctv18-lh.akamaihd.net/i/cnbctv18_1@174868/master.m3u8?hdnea=st=1625157699~exp=1625997699~acl=/*~hmac=0de63e97878077810af99fcca18014ea4140adc4b19ece53f5975507d6b53661"],

//["CNBC Awaaz", "news", "https://i.ytimg.com/vi/uM29FglmOig/maxresdefault.jpg", "https://cnbcawaaz-lh.akamaihd.net/i/cnbcawaaz_1@174872/master.m3u8?hdnea=st=1625158235~exp=1625248235~acl=/*~hmac=7fd8daed4736e7517171e885889f76336cf5c5b6cdd832484e1b3014f956315b"],

		
	//["Bloomberg Europe", "news", "https://data.bloomberglp.com/media/sites/9/2018/04/og.png","https://www.bloomberg.com/media-manifest/streams/eu.m3u8"],
	
	
	<!-- devotional -->
	
	//["Sanskar", "devotional", "https://i.ytimg.com/vi/uSfLrpR0wKQ/maxresdefault.jpg", "https://sanskarlive.sanskargroup.in/sanskartvlive.m3u8"],
	
	//["Om Shanti HD", "devotional", "https://i.ytimg.com/vi/ucvWUzmbSIE/maxresdefault.jpg", "https://webcastcdnbkwsuglobal.b-cdn.net/live/godlywood_1/index.m3u8"],
	
	//["ISKCON Vrindavan Darshan", "devotional", "https://i.ytimg.com/vi/ZwSmRoM6xV0/maxresdefault.jpg", "https://5f1e336f6be67.streamlock.net/live-iscon/smil:iscon.smil/chunklist_w1460803599_b720000.m3u8"],
	
	
	//["Prati Shirdi Darshan", "devotional", "https://daex9l847wg3n.cloudfront.net/shemoutputimages/Prati-Shirdi,-Shirgaon,-Pune,-Live-Darshan/5bebf0d9a609d202b30000e3/large_16_9.jpg", "https://bhaktiapp.shemaroo.com/pratishirdi/smil:pratishirdisel.smil/chunklist_b1128000_sleng.m3u8"],
	
	//["Shri Sankara", "devotional", "https://i.ytimg.com/vi/ZMzHQ_2l-gs/maxresdefault.jpg", "https://8noro432dm6g-hls-live.wmncdn.net/Sri/a5518065f47332dad6b509920c827474.sdp/chunks.m3u8"],
	
	//["Shraddha", "devotional", "https://yt3.ggpht.com/ytc/AKedOLQshjKV-_bqPuUAarWulA_juXXztjraWuOhUw0E=s900-c-k-c0x00ffffff-no-rj", "https://rtmp.smartstream.video/mhoneshradha/mhoneshradha/chunklist_w677995310.m3u8"],
	
	//["Ishwar TV", "devotional", "https://yt3.ggpht.com/ytc/AKedOLS2RV5NUy9riUbIcsVFYrVR1Abr-Ds-n0qlEj0X=s900-c-k-c0x00ffffff-no-rj", "http://cdn.clive.in:1935/ishwartv/ishwartv.stream_HDp/chunklist_w1076028611.m3u8"],
	
	//["Jigyasa", "devotional", "https://static.vidgyor.com/live/midroll/assets/jigyasatv.png", "https://jigyasatv.livebox.co.in/jigyasatvhls/demo.m3u8"],
	
	//["Mangalmay", "devotional", "http://d3jnkp3lrs2hd5.cloudfront.net/images/640x480/8e602418-7590-11e1-b5d7-12314100bda1.jpg", "http://mangalmaydigital.com:1935/liveashram/mystreamhd/chunklist_w1272993337.m3u8"],
	
	//["Hare Krsna", "devotional", "https://i.pinimg.com/originals/45/9e/4e/459e4e4711d770c51a059e5029f11181.jpg", "https://rtmp.smartstream.video/HareKrsna/HareKrsna/chunklist_w54795737.m3u8"],
	
	//["Krishna Vani", "devotional", "http://d3jnkp3lrs2hd5.cloudfront.net/images/320x180/fe50f8e6-91b8-4ece-b264-6d62360a6116.jpg", "http://live.agmediachandigarh.com/KRISHNAVAANI/cdb4d5121f9b2fa38a5e58ce4284414e.sdp/chunks.m3u8"],

	
	["C News India", "movies", "", "https://m-c037-j2apps.s.llnwi.net/hls/8079.CNewsBharat.in_480p/index.m3u8"],
	
	["AB Star News", "movies", "", "https://m-c05-j2apps.s.llnwi.net/hls/8014.ABStarNews.in_480p/index.m3u8"],
	
	
	
	
	
	
	<!-- regional -->

	["DD Assam", "regional", "https://www.sentinelassam.com/wp-content/uploads/2020/03/DDj.jpg","https://m-c15-j2apps.s.llnwi.net/hls/0284.DDNorthEast.in.m3u8"],

	["DD Uttar Pradesh", "regional", "https://www.sentinelassam.com/wp-content/uploads/2020/03/DDj.jpg","https://m-c16-j2apps.s.llnwi.net/hls/0290.DDUP.in_480p/index.m3u8"],
	
	["Northeast live", "regional", "https://northeastlivetv.com/wp-content/uploads/2018/11/NE-LIVE-Image.jpg", "https://cdn.pride-east.in/smartstream-us/mbrstreammbr/mbrstreammbr.smil/playlist.m3u8"],

//	["Odisha TV", "regional", "https://static.vidgyor.com/live/midroll/assets/odishatv.png", "https://vidcdn.vidgyor.com/tv9gujarati-origin/live/tv9gujarati-origin/live1/chunks.m3u8"],

	
	//["Kappa TV", "regional", "http://2.bp.blogspot.com/-S8nep8KUi2Y/U_YsglMOOJI/AAAAAAAADlw/SG-hYOCt6UQ/s1600/KappaTV%2BMalayalam%2BChannel.jpg", "https://m-c18-j2apps.s.llnwi.net/hls/1380.KappaTV.in_480p/index.m3u8"],

	//["ABP Ananda", "regional", "https://static.vidgyor.com/live/abp_ananada.jpg", "https://abp-i.akamaihd.net/hls/live/765530/abpananda/master_1564.m3u8"],

	//["ABP Ganga", "regional", "https://i.ytimg.com/vi/W1nzASI7nTE/maxresdefault.jpg", "https://m-c02-j2apps.s.loris.llnwd.net/hls/7017.ABPGanga.in_480p/index.m3u8"],

	//["ABP Asmita", "regional", "https://i.ytimg.com/vi/1MYSmpjEyhc/maxresdefault.jpg", "https://m-c02-j2apps.s.loris.llnwd.net/hls/7019.ABPAsmita.in_480p/index.m3u8"],

	//["ABP Maajha", "regional", "https://static.abplive.com/wp-content/uploads/sites/4/2020/12/16124758/unnamed-file.jpg?impolicy=abp_images&imwidth=150", "https://abp-i.akamaihd.net/hls/live/765530/abpananda/master_1564.m3u8"],

	//["BTV Kannada", "regional", "https://static.vidgyor.com/live/midroll/assets/btv.png", "https://vidcdn.vidgyor.com/btv-origin/liveabr/btv-origin/live1/chunks.m3u8"],

	//["Janam TV", "regional", "https://static.vidgyor.com/live/midroll/assets/janamtv.jpg", "https://vidcdn.vidgyor.com/tv9telugu-origin/live/tv9telugu-origin/live1/chunks.m3u8"],

		
	["Kantipur Nepal", "regional", "https://static.vidgyor.com/live/midroll/assets/kantipur.png", "https://ktvhdnpicc6670.ekantipur.com/ktv_abr/hd/playlist.m3u8"],

	["Mathrubhumi", "regional", "https://static.vidgyor.com/live/midroll/assets/mathrubhumi.png", "https://mathrubhumividgyor.pc.cdn.bitgravity.com/mathrubhumi-origin/liveabr/playlist_dvr.m3u8"],

	//["Media One", "regional", "https://www.inmalayalam.com/videos/wp-content/uploads/sites/2/2019/02/mediaone-live.jpg", "https://www.youtube.com/embed/live_stream?channel=UCkA21M22vGK9GtAvq3DvSlA"],


	//["Otv Tarang", "regional", "https://static.vidgyor.com/live/midroll/assets/tarangtv.png", "https://cdn.smartstream.video/smartstream-us/tarangtvmbr/tarangtvmbr.smil/playlist.m3u8"],

	//["Polimer", "regional", "/https://static.vidgyor.com/live/midroll/assets/polimernews.png", "https://vidcdn.vidgyor.com/polimernews-origin/liveabr/playlist.m3u8"],

	//["Pratidin Time", "regional", "https://static.vidgyor.com/live/midroll/assets/pratidintime.png", "https://vidcdn.vidgyor.com/assamtalks-origin/liveabr/assamtalks-origin/live1/chunks.m3u8"],

	//["Thanathi TV", "regional", "https://static.vidgyor.com/live/midroll/assets/thanthitv.png", "https://vidcdn.vidgyor.com/thanthi-origin/liveabr/thanthi-origin/live4/chunks.m3u8"],


	//["TV9 Gujarati", "regional", "https://static.vidgyor.com/live/midroll/assets/tv9gujarati.png", "https://vidcdn.vidgyor.com/tv9gujarati-origin/live/tv9gujarati-origin/live1/chunks.m3u8"],

	//["TV9 Bangla", "regional", "https://static.vidgyor.com/live/midroll/assets/tv9bangla.png", "https://vidcdn.vidgyor.com/tv9bangla-origin/live/playlist.m3u8"],

	//["TV9 Marathi", "regional", "https://static.vidgyor.com/live/midroll/assets/tv9marathi.png", "https://vidcdn.vidgyor.com/tv9marathi-origin/live/tv9marathi-origin/live1/chunks.m3u8"],

	//["TV9 Telugu", "regional", "https://static.vidgyor.com/live/midroll/assets/tv9telugu.png", "https://vidcdn.vidgyor.com/tv9telugu-origin/live/tv9telugu-origin/live1/chunks.m3u8"],

	//["TV9 Kannada", "regional", "https://static.vidgyor.com/live/midroll/assets/tv9kannada.png", "https://vidcdn.vidgyor.com/tv9kannada-origin/live/tv9kannada-origin/live1/chunks.m3u8"],


	//["VTV Gujrati", "regional", "https://static.vidgyor.com/live/midroll/assets/vtv.png", "https://cdn.smartstream.video/smartstream-us/vtvlive/vtvlive/chunklist_w335466777.m3u8"],



	
	

	//["PTC Dhol", "music", "https://sc.dish.com/shared/images/station-logos/PTCDH.png", "https://streaming.ptcplay.com/ptcdholtvINOne/smil:Live.smil/playlist.m3u8"],

	//["PTC Chak De IND", "music", "https://www.ptcnetwork.com/wp-content/uploads/2019/03/PTC-Chak-De-1.png", "https://streaming.ptcplay.com/ptcchakdeINONE/smil:Live.smil/playlist.m3u8"],

	//["PTC Chak De Canada", "music", "https://i.ytimg.com/vi/FqSAtKB0mjY/hqdefault.jpg", "https://streaming.ptcplay.com/ptcchakdeusONE/smil:Live.smil/playlist.m3u8"],

	//["PTC Simran", "music", "https://static.wikia.nocookie.net/logopedia/images/0/02/PTC_Simran.jpg", "https://streaming.ptcplay.com/ptcSimranINOne/smil:Live.smil/playlist.m3u8"],

	//["PTC Gold", "music", "https://i.ytimg.com/vi/qfXcQBmaZq8/maxresdefault.jpg", "https://streaming.ptcplay.com/ptcpunjabiGoldINOne/smil:Live.smil/playlist.m3u8"],

	//["PTC Music", "music", "https://uploads.tapatalk-cdn.com/20180822/521fcfd99f24e708b039679dea1a0d8e.jpg", "https://streaming.ptcplay.com/ptcMusicINOne/smil:Live.smil/playlist.m3u8"],

	["PTC Punjabi IND", "music", "https://wp.ptcpunjabi.co.in/wp-content/uploads/2021/02/miss-ptc-punjabi-2021-2.jpg", "https://streaming.ptcplay.com/ptcPunjabiINOne/smil:Live.smil/playlist.m3u8"],

	//["PTC Punjabi One", "music", "", "https://streaming.ptcplay.com/ptcpunjabiujONE/smil:Live.smil/playlist.m3u8"],

	//["PTC Punjabi Canada", "music", "https://yt3.ggpht.com/ytc/AKedOLQBn9p-xEdWyKEvmtQHGrcbKUo1EczFyU2vKSTlnA=s900-c-k-c0x00ffffff-no-rj", "https://streaming.ptcplay.com/ptcpunjabiUSone/smil:Live.smil/playlist.m3u8"],

	//["PTC News IND", "music", "https://www.ptcnetwork.com/wp-content/uploads/2019/03/PTCNews.png", "https://streaming.ptcplay.com/PTCNEWSINONE/smil:Live.smil/playlist.m3u8"],

	//["PTC News US", "music", "https://scontent.fdel27-3.fna.fbcdn.net/v/t1.6435-9/40790419_727877544224608_1079971811501801472_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IL4k11NNtU8AX-l51VR&_nc_ht=scontent.fdel27-3.fna&oh=072432fe7753bfab00c87af2085d985d&oe=60E535E5", "https://streaming.ptcplay.com/ptcnewsusONE/smil:Live.smil/playlist.m3u8"],
	
	//["Colors HD", "music","","https://mhdtvworld.xyz/delta/planet/max.php?id=7798&e=.m3u8"],	
	
	//["Hungama Artist Aloud", "music","https://i.ytimg.com/vi/E9-RHP8NNHU/maxresdefault.jpg","https://live.hungama.com/linear/artist-aloud/playlist_240p/index.m3u8"],
	
	//["Zoom", "music","","https://zoomweblive-lh.akamaihd.net/i/Zoomweb_1@348071/index_720_av-b.m3u8?sd=10&rebase=on"],


	//["MH1", "music", "https://yt3.ggpht.com/ytc/AKedOLSf3-XY1K0SdnrJzoQDaD47fDSC1_JFQBEAsm8Plg=s900-c-k-c0x00ffffff-no-rj", "https://m-c049-j2apps.s.llnwi.net/hls/0197.MH1.in_480p/index.m3u8"],
	
	//["7x Music", "music", "https://qqcdnpictest.mxplay.com/pic/30000000549644480/en/16x9/640x360/3616C942D173377F3B12C5B5F86F91204A85F9EFT.jpg", "https://m-c010-j2apps.s.llnwi.net/hls/8053.LifePunjabi.in_480p/index.m3u8"],
	
	//["7x Music", "music", "https://qqcdnpictest.mxplay.com/pic/8053.LifePunjabi.in/en/1x1/208x208/test_pic1609307117310.webp", "https://m-c049-j2apps.s.llnwi.net/hls/1493.7SMusic.in_480p/index.m3u8"],
	
//["9x Music", "music", "http://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/biz/2017/12/29/9XM.png", "https://m-c01-j2apps.s.llnwi.net/live_hd/0306.9XM.in_480p/index.m3u8"],

	//["9x Jalwa", "music", "https://yt3.ggpht.com/ytc/AKedOLRKoUAk7eB5XtAXdtP4p3zfRjWHqIm-8KKvz2Zf6A=s900-c-k-c0x00ffffff-no-rj", "https://m-c01-j2apps.s.llnwi.net/live/0781.9XJalwa.in_480p/index.m3u8"],
		
	//["9X Jhakaas", "music" ,"https://qqcdnpictest.mxplay.com/pic/30000000550711683/en/16x9/640x360/84BEFAA09F60926EA9DA80DF546C3F5A693275A77.jpg", "https://m-c01-j2apps.s.llnwi.net/live/0750.9XJhakaas.in_480p/index.m3u8"],
	
	//["Wah Punjabi", "music", "https://static.wikia.nocookie.net/logopedia/images/2/2c/Wah_Punjabi.jpeg", "http://live.agmediachandigarh.com/wahpunjabi/45f5bff56a47f9ebb68595aac72db8b0.sdp/chunks.m3u8"],

	["B4U Music", "music", "https://yt3.ggpht.com/ytc/AKedOLSf5-fH9N8uWJgWQjPK-McSoQqXQ0HiyM9unf2m=s900-c-k-c0x00ffffff-no-rj", "https://m-c01-j2apps.s.llnwi.net/hls_hd/0204.MusicIndia.in_720p/index.m3u8"],

	["Music India", "music", "https://pbs.twimg.com/profile_images/618036953/music_india_400x400.png", "http://14.199.164.20:4001/play/a0mt/index.m3u8"],

	//["Masti Music", "music", "https://www.exchange4media.com/news-photo/101552-Untitleddesign5.jpg", "https://m-c07-j2apps.s.llnwi.net/hls/0589.Mastiii.in_480p/index.m3u8"],
		
	//["Harayana Tashan Music", "music", "http://d3jnkp3lrs2hd5.cloudfront.net/images/320x180/80251cb7-eefb-457b-bbce-a84cb0a0179a.jpg", "https://m-c036-j2apps.s.llnwi.net/hls/8032.HaryanaTashanMusic.in_480p/index.m3u8"],

	//["Harayana Tashan Ent", "music", "http://d3jnkp3lrs2hd5.cloudfront.net/images/320x180/9512fdf2-e1a6-4d7f-b19d-b43a07aed296.jpg", "http://haryanatashantv.livebox.co.in/haryanatehelkahls/haryanatehelka.m3u8"],
	
	
	//["Zee Smile - US", "music", "", "https://f8e7y4c6.ssl.hwcdn.net/magic/playlist.m3u8"],
	
	//["Zee Music", "music", "", "https://f8e7y4c6.ssl.hwcdn.net/smileusa/playlist.m3u8"],
	
	//["Zee Bioskop", "music", "", "http://210.210.155.35/qwr9ew/s/s32/index.m3u8"],
	["Zee Bioskop", "music", "", "http://210.210.155.35/qwr9ew/s/s32/index.m3u8"],

//	["Zee Talkies", "music", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-9-zeetalkies/list/1170x658_483062857.jpg", "https://f8e7y4c6.ssl.hwcdn.net/ztalkieshd/playlist.m3u8"],
	
//	["Zee Action", "music", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-9-zeeaction/list/1170x658withlog_1953200347.jpg", "http://basic-iptvesun.com:8080/carter/GUV1bMq2VK/187"],
	
	//["Zee TV HD", "music", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-9-zeetvhd/list_clean/1170x658withlogo_399683415.png", "http://basic-iptvesun.com:8080/carter/GUV1bMq2VK/2837"],


//	["Zee World", "music", "https://i.pinimg.com/originals/9c/4c/05/9c4c05a86c148a2c0abbce7f23062a43.jpg", "https://f8e7y4c6.ssl.hwcdn.net/ztvhdusa/playlist.m3u8"],

	//["Zee APAC", "music", "", "https://f8e7y4c6.ssl.hwcdn.net/apacsea/playlist.m3u8"],

//	["Zee TV - US", "music", "https://www.indiantvinfo.com/media/2019/08/usa-channel-of-zee-tv-1200x686.jpg", "https://f8e7y4c6.ssl.hwcdn.net/world/playlist.m3u8"],

//	["Zee5 Originals", "music", "https://www.flickzee.com/blog/wp-content/uploads/2018/10/Zee5-SVG1.jpg", "https://f8e7y4c6.ssl.hwcdn.net/zee5_originals/playlist.m3u8"],

//	["Zee5 Romance", "music", "https://s3images.zee5.com/wp-content/uploads/sites/7/2020/08/Stories-for-Millenials-to-watch-on-ZEE5.jpg", "https://f8e7y4c6.ssl.hwcdn.net/zee5_romance/playlist.m3u8"],
	
	
//	["Colors HD", "music", "https://i.ytimg.com/vi/Lx7j0oHEYFc/maxresdefault.jpg", "https://feed.play.mv/live/10005200/6G8zJ9XsyB/master.m3u8"],
	
//	["Colors Cineplex HD", "music", "https://dsnnepal.com/wp-content/uploads/2020/08/colors-cineplex-hd.jpg", "https://feed.play.mv/live/10005200/ABTuyrBr22/master.m3u8"],

	["Shemaroo TV", "movies", "https://www.thehindubusinessline.com/news/variety/xuqvxn/article31462919.ece/ALTERNATES/LANDSCAPE_1200/shemaroojpg", "https://m-c06-j2apps.s.llnwi.net/hls/7073.FunTV.in_480p/index.m3u8"],

	
	<!-- movies -->

	//["Dhoom", "movies", "","http://14.199.164.20:4001/play/a0sa/index.m3u8"],
	
//	["Dhinchaak", "movies", "https://pbs.twimg.com/media/EetJFxWUEAQyO2j.jpg","http://14.199.164.20:4001/play/a0o5/index.m3u8"],
	
//	["Dhinchaak 2", "movies", "https://www.trackdish.com/wp-content/uploads/2021/04/dhinchaak-2-channel-logo-min.jpg","http://14.199.164.20:4001/play/a0tm/index.m3u8"],
	
	//["Enterr 10 Rangela", "movies", "","http://14.199.164.20:4001/play/a0tp/index.m3u8"],
	
	["Hungama Artist Aloud", "movies", "https://media-exp1.licdn.com/dms/image/C4E1BAQEvITBGeFbF0w/company-background_10000/0/1556188756782?e=2159024400&v=beta&t=2T9AwdAXN_c4Z2XnMvx_1ovXlqdUnUYAY6wl9r6rlro", "https://live.hungama.com/linear/artist-aloud/playlist.m3u8"],
	
	["Hungama Dil Se", "movies", "https://i.pinimg.com/474x/8e/3b/da/8e3bda42a2633238db1c28e39ef01e7e.jpg","https://live.hungama.com/linear/dil-se/playlist.m3u8"],
	//https://live.hungama.com/linear/dil-se/playlist_240p/index.m3u8
	

	//["B4U Movies", "movies", "","http://14.199.164.20:4001/play/a0wj/index.m3u8"],
	
	//["B4U Kadak", "movies", "","http://14.199.164.20:4001/play/a0nd/index.m3u8"],
	
	["B4U Kadak", "movies", "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2019/05/30/b4uuu4.jpg?itok=4zSIGpvN","http://103.199.160.85/Content/moviehouse/Live/Channel(MovieHouse)/index.m3u8"],
	
//	["B4U Movies", "movies", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0f4a3f33247999.56a6096d3b412.jpg","http://14.199.164.20:4001/play/a0wj/index.m3u8"],

	
//	["B4U Plus", "movies", "https://dishnews.in/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-13-at-9.43.55-AM.jpeg","http://14.199.164.20:4001/play/a0wi/index.m3u8"],
	
//	["B4U Hitz", "movies", "https://dishnews.in/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-13-at-9.43.55-AM.jpeg","http://14.199.164.20:4001/play/a0wh/index.m3u8"],
	

	//["Show Box", "movies", "https://static.wikia.nocookie.net/logopedia/images/6/68/Showbox.jpeg/revision/latest?cb=20200117200016", "https://m-c04-j2apps.s.llnwi.net/hls/7002.ShowBox.in_480p/index.m3u8"],
	
	//["AB Maiboli", "movies", "","http://14.199.164.20:4001/play/a0na/index.m3u8"],
//	["AB Dabang", "movies", "https://d229kpbsb5jevy.cloudfront.net/tv/480/270/languages/Dabangg_TV.jpg","http://14.199.164.20:4001/play/a0nb/index.m3u8"],
	//["AB Dhamaal", "movies", "","http://14.199.164.20:4001/play/a0n9/index.m3u8"],
//	["AB Mastiii", "movies", "https://upload.wikimedia.org/wikipedia/commons/8/82/Mastiii-TV_logo.jpg","http://103.199.160.85/Content/masthi/Live/Channel(Masthi)/index.m3u8"],
	
	
	["Tehelka TV", "movies", "", "https://cdn.appv.jagobd.com:444/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/tehelkatv.stream/playlist.m3u8"],
		
	
	["ABZY Movies", "movies", "", "https://m-c010-j2apps.s.llnwi.net/hls/8069.ABZYMovies.in_480p/index.m3u8"],
	
	["Dream TV", "movies", "https://www.dreammediabroadcasting.com/wp-content/uploads/2021/05/IMG-20210421-WA0165-1024x723.jpg", "https://cloudflare-cdn301.ottpro.in/dream_media/reedeem/playlist.m3u8"],

	
	["Dishum", "movies", "https://i.ytimg.com/vi/5FEKV4x4eVw/hqdefault.jpg", "https://m-c29-j2apps.s.llnwi.net/hls/5332.Dishum.in.m3u8"],
	
	["Bflix Movies", "movies", "https://3.bp.blogspot.com/-bFu3Qcuw04I/V1LablvHTJI/AAAAAAAAQrU/ZcUycyxMFN8OTglvEE1hG1edUvVHqO4WQCLcB/w1200-h630-p-k-no-nu/bflix_logo.png", "https://m-c036-j2apps.s.llnwi.net/hls/5045.BFlixMovies.in_480p/index.m3u8"],
		
	["Manoranjan Movies", "movies", "https://upload.wikimedia.org/wikipedia/en/d/da/ManoranjanTVLogo.jpg", "https://m-c036-j2apps.s.llnwi.net/hls/2172.ManoranjanMovies.in_480p/index.m3u8"],
	
	["E24", "movies", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-9-207/list/09207e24.jpg", "https://m-c02-j2apps.s.loris.llnwd.net/hls/0389.E24.in_480p/index.m3u8"],
	
	
	["Movie Plus", "movies", "https://qqcdnpictest.mxplay.com/pic/6521.Movieplus.in/en/1x1/208x208/test_pic1559821113768.jpg", "https://m-c03-j2apps.s.llnwi.net/hls/6521.Movieplus.in_480p/index.m3u8"],
	
	["Box Cinema", "movies", "https://static.wikia.nocookie.net/logopedia/images/a/a0/Box_Cinema.jpg/revision/latest?cb=20191224174158", "https://m-c01-j2apps.s.llnwi.net/hls/6523.BOXCinema.in_480p/index.m3u8"],

	//["Bollywood Classics", "movies", "https://starsat.co.za/wp-content/uploads/2017/02/ST-Bollywood.png", "https://m-c09-j2apps.s.llnwi.net/hls/8001.Bollywood.in_480p/index.m3u8"],
	["Bollywood Classics", "movies", "https://starsat.co.za/wp-content/uploads/2017/02/ST-Bollywood.png", "http://telekomtv-ro.akamaized.net/shls/LIVE$BollywoodTVFilm/6.m3u8/Level(1677721)?start=LIVE&end=END"],
	
	
	["Filmy", "movies", "https://www.logolynx.com/images/logolynx/0b/0bde5e9b465a812b7f1bfc8c624f17fd.png", "https://m-c15-j2apps.s.llnwi.net/hls/0079.Filmy.in_480p/index.m3u8"],
	
	["Maha Movies", "movies", "https://lh3.googleusercontent.com/cPIbHGuiUoWqtRjJjmK5Rn0NkbLEI3HdfWiD3Wc0Mg9CsA7by_QfPITAoiBxCTRy58hZ=w1024-h500", "https://m-c036-j2apps.s.llnwi.net/hls/2820.MahaMovie.in_480p/index.m3u8"],
	
	//["Wow Cinema", "movies","http://origin-static.nexg.tv/unified/admin/upload/750_1490336979Wow_Cinema_750x380.jpg", "https://m-c036-j2apps.s.llnwi.net/hls/2940.WOWCinemaOne.in_144p/index.m3u8"],
	
	//["YTV India", "movies", "", "https://m-c048-j2apps.s.llnwi.net/hls_hd/6107.YTVIndiaHD.in_720p/index.m3u88"],
	
	["Firangi", "movies", "https://pr24x7.files.wordpress.com/2011/09/firangilogo.jpg", "https://m-c15-j2apps.s.llnwi.net/hls/0353.Firangi.in_480p/index.m3u8"],
		
	//["Colors Cineplex HD", "movies", "", "http://dx3.gcdn.co/hindi-COLORSCINEPLEXHD/index.m3u8"],
	
	//["UTV Action", "movies", "", "http://dx3.gcdn.co/hindi-UTVACTION/index.m3u8"],
	
	//["UTV Movies", "movies", "", "http://dx3.gcdn.co/hindi-UTVMOVIES/index.m3u8"],
		
	//["Zee Cinema USA", "movies", "", "http://z5amshls.akamaized.net/cinemausa/tracks-v1a1/playlist.m3u8"],
	
	//["Sony Movies", "movies", "", "http://51.52.156.22:8888/http/009"],
	//["Sony Movies", "movies", "", "http://51.52.156.22:8888/http/009"],
	
	
	//["Sony Max", "movies", "", "http://208.115.215.42/Sony_Max_HD/playlist.m3u8"],
	
	//["Sony Yay - Bengali", "movies", "", "https://d20fdzcwhk7szz.cloudfront.net/SONY_YAY.m3u8"],
	
	
	["Max", "movies", "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_logo/5613700600001.png", "https://shls-mbcmax-prod-dub.shahid.net/out/v1/13815a7cda864c249a88c38e66a2e653/index_2.m3u8?@amarnettv.live"],
	
	["Futurism", "movies", "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_logo/5613700600001.png", "https://dai.google.com/linear/hls/event/YakHdnr_RpyszducVuHOpQ/master.m3u8"],
	
	["Dubai One HD", "movies", "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_logo/5613700600001.png", "http://dminnvll.cdn.mangomolo.com/dubaione/smil:dubaione.stream.smil/chunklist_b1800000.m3u8"],
	
	["Star Jalsa", "movies", "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_logo/5613700600001.png", "https://ccntv.anytv.live/starjalsha/index.m3u8"],
	
	["Sony Wah", "movies", "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_logo/5613700600001.png", "https://d2gowxuvx77j6q.cloudfront.net/WAH.m3u8"],
	
	//["Sony Sab", "movies", "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_logo/5613700600001.png", "https://m-c066-j2apps.s.llnwi.net/hls_hd/7022.SABHD.in.m3u8"],
	
	["Sony Pal", "movies", "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_logo/5613700600001.png", "https://m-c066-j2apps.s.llnwi.net/hls_hd/7029.SonyPal.in.m3u8"],

	["Zee Action", "movies", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-9-zeeaction/list/1170x658withlog_1953200347.jpg", "https://y5w8j4a9.ssl.hwcdn.net/action/tracks-v1a1/mono.m3u8"],
	
	["Zee Anmol", "movies", "http://thekolkatamail.com/wp-content/uploads/2021/04/09zeeanmolcinemazeeanmolci.png", "https://y5w8j4a9.ssl.hwcdn.net/zanmolcnm/tracks-v1a1/mono.m3u8"],

	["Zee Cinema", "movies", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-9-zeecinema/list/1170x658withlogo_807278654.jpg", "https://y5w8j4a9.ssl.hwcdn.net/cinemauk/tracks-v2a1/mono.m3u8"],

	["Zee Cinema HD", "movies", "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-9-zeecinemahd/list/1170x658withlogo_167952257.jpg", "https://y5w8j4a9.ssl.hwcdn.net/cinemausa/tracks-v1a1/mono.m3u8"],
	
	//["Zee Cafe SD", "movies", "","http://z5amshls.akamaized.net/zeecafesd/tracks-v1a1/playlist.m3u8"],
	
	//["Zee Cafe HD", "movies", "","http://z5amshls.akamaized.net/zeecafehd/tracks-v1a1/playlist.m3u8"],
//	["&Pictures HD", "movies", "https://i.vimeocdn.com/video/871996787_1280x720.jpg","https://f8e7y4c6.ssl.hwcdn.net/andpicssd/playlist.m3u8"],
	
//	["&Flix HD", "movies", "https://i.vimeocdn.com/video/871996787_1280x720.jpg","https://f8e7y4c6.ssl.hwcdn.net/andflixhd/index.m3u8"],	
	
//	["&Prive HD", "movies", "https://i.vimeocdn.com/video/871996787_1280x720.jpg","https://y5w8j4a9.ssl.hwcdn.net/andprivehd/tracks-v1a1/index.m3u8"],
	
	//["&Flix SD", "movies", "","http://z5amshls.akamaized.net/andflix/tracks-v1a1/playlist.m3u8"],
	
	//["&Flix HD 1", "movies", "","http://z5amshls.akamaized.net/andflixhd/tracks-v1a1/playlist.m3u8"],
	//["&Flix HD 2", "movies", "","https://f8e7y4c6.ssl.hwcdn.net/andflixhd/index.m3u8"],
	
	//["CVR English News", "movies", "","https://m-c08-j2apps.s.llnwi.net/hls/2144.CVREnglishNews.in.m3u8"],
	
	//["Cartoon Hindi",  "movies", "","https://streams.simpaisa.com:8443/pitvlive3/cartoonhindi.smil/chunklist.m3u8"],
	
	//["Skystar Movies", "movies", "","https://m-c01-j2apps.s.llnwi.net/hls/5290.SkystarMovies.in.m3u8"],
	
	["AMC Rush", "movies", "https://tv.mobistream.co.za/uploads/cache/channel_thumb/uploads/jpg/8e9c3fc402b5310e84804d53a8a2d7da.jpg","https://amc-rushbyamc-1.vizio.wurl.com/manifest/playlist.m3u8"],

	
//	["MBC Plus Drama", "movies", "https://www.roy2a.com/wp-content/uploads/2021/06/maxresdefault.jpg","https://shls-mbcplusdrama-prod-dub.shahid.net/out/v1/97ca0ce6fc6142f4b14c0a694af59eab/index.m3u8"],
	
	["Pluto TV Mistérios", "movies", "https://www.oficinadanet.com.br/imagens/post/38874/chamada-pluto-tv-iptv-ganha-novos-canais.jpg","http://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5fac52f142044f00078e2a51/master.m3u8?advertisingId=%7BPSID%7D&appVersion=unknown&deviceDNT=%7BTARGETOPT%7D&deviceId=%7BPSID%7D&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain=%7BAPP_DOMAIN%7D&samsung_app_name=%7BAPP_NAME%7D&us_privacy=1YNY"],
	
	//["Oh My Pet", "movies", "https://images.produ.com/noticias/1020/big-OhMyPet.jpg","https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f2acdab16f5b3000721ae2c/master.m3u8?advertisingId=&appName=web&appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&app_name=web&clientDeviceType=0&clientID=6fbead95-26b1-415d-998f-1bdef62d10be&clientModelNumber=na&deviceDNT=false&deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&deviceLat=19.4358&deviceLon=-99.1441&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=88.0.4324.150&marketingRegion=VE&serverSideAds=false&sessionID=b8e5a857-714a-11eb-b532-0242ac110002&sid=b8e5a857-714a-11eb-b532-0242ac110002&userId="],
	
	//["Star Trek", "movies", "","https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5efbd39f8c4ce900075d7698/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=rokuChannel&deviceMake=rokuChannel&deviceDNT=1&advertisingId=channel&embedPartner=rokuChannel&appName=rokuchannel&is_lat=1&bmodel=bm1&content=channel&platform=web&tags=ROKU_CONTENT_TAGS&coppa=false&content_type=livefeed&rdid=channel&genre=ROKU_ADS_CONTENT_GENRE&content_rating=ROKU_ADS_CONTENT_RATING&studio_id=viacom&channel_id=channel"],
	
	
	//["Rescue 911", "movies", "","https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f21e831e9fe730007706acb/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=rokuChannel&deviceMake=rokuChannel&deviceDNT=1&advertisingId=channel&embedPartner=rokuChannel&appName=rokuchannel&is_lat=1&bmodel=bm1&content=channel&platform=web&tags=ROKU_CONTENT_TAGS&coppa=false&content_type=livefeed&rdid=channel&genre=ROKU_ADS_CONTENT_GENRE&content_rating=ROKU_ADS_CONTENT_RATING&studio_id=viacom&channel_id=channel"],
	
	
	
	//["Movie Kingdom", "movies", "","https://a.jsrdn.com/broadcast/e9b4093a41/+0000/c.m3u8"],
	
	["Distro - Filmeraa", "movies", "","https://a.jsrdn.com/broadcast/7ef91d3d7a/+0000/c.m3u8"],
	
	["Movie Sphere", "movies", "https://provider-static.plex.tv/epg/images/thumbnails/moviesphere_artwork_vertical.jpg","https://moviesphere-plex.amagi.tv/playlist.m3u8"],
	
	["My Time Movie", "movies", "https://mytimemovienetwork.com/wp-content/uploads/2021/07/bannerJUL.png","https://mytime-roku-ingest.cinedigm.com/playlist.m3u8"],
	
	["Hallmark Movies", "movies", "https://www.redbeecreative.com/storage/imagecache/poster_medium/work_block_media/hallmark_drama_logo_green-85483.jpg","https://dai2.xumo.com/amagi_hls_data_xumo1212A-rokuhallmark/CDN/playlist.m3u8"],
	
	["Discover Film", "movies", "https://media-exp3.licdn.com/dms/image/C561BAQEEsTdbC7Ua5w/company-background_10000/0/1564158436770?e=2159024400&v=beta&t=Piq6Fvo9AOxS5PInRmNgDs1cXupIiKrgc67iOCalTDo","https://discoverfilm-discoverfilm-1-gb.samsung.wurl.com/manifest/3000.m3u8"],
	
	
	["Sony Turbo - Russian", "movies", "https://i.ytimg.com/vi/VGDDup4y2G4/maxresdefault.jpg","https://okkotv-live.cdnvideo.ru/channel/Sony_Turbo.m3u8"],
	
	["Rakuten Top", "movies", "https://img.kyodonews.net/english/public/images/posts/9a65a5b9f4dc6146f793d8f312193c66/photo_l.jpg","https://rakuten-topfree-1-eu.rakuten.wurl.tv/playlist.m3u8m3u8"],
	
	["Rakuten Family", "movies", "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/imzItg7psqAw/v1/-1x-1.jpg","https://rakuten-family-12-fi.samsung.wurl.tv/playlist.m3u8"],
	
	
	["Rakuten Thriller", "movies", "https://global.rakuten.com/corp/innovation/assets/img/rnn/2017/0724_s/ogp.jpg","https://rakuten-thriller-6-eu.rakuten.wurl.tv/playlist.m3u8"],
	
	
	//["Rakuten Thriller", "movies", "https://cdn.mos.cms.futurecdn.net/Wnc8K42CNBuUFwTeV8CYLB-1200-80.jpg.webp","https://rakuten-thriller-6-eu.rakuten.wurl.tv/playlist.m3u8"],


	["Paramount Network", "movies", "https://tvline.com/wp-content/uploads/2020/09/paramount-plus-logo.jpg","https://htv-drm-live-cdn.fptplay.net/CDN-FPT02/PARAMOUNT-HD-720p/chunks.m3u8"],

	//["Paramount Network 2", "movies", "https://tvline.com/wp-content/uploads/2020/09/paramount-plus-logo.jpg","http://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?advertisingId=91a6ae51-6f9d-4fbb-adb0-bdfffa44693e&appVersion=unknown&deviceDNT=0&deviceId=91a6ae51-6f9d-4fbb-adb0-bdfffa44693e&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceUA=samsung/SM-T720/10&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain=https://play.google.com/store/apps/details?id=com.samsung.android.tvplus&samsung_app_name=Mobile+TV+Plus&us_privacy=1YNY"],
	
	
	
	["Warner", "movies", "https://images.squarespace-cdn.com/content/v1/54b32958e4b08972957c461b/1582941818182-EI8FLEXB1A3GZ7BDKSER/image-asset.png?format=1500w","http://203.154.243.89:11205"],
	
	
	["AXN", "movies", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0a7eab88629005.5ddc3e6e12a2c.jpg","https://htv-drm-live-cdn.fptplay.net/CDN-FPT02/AXN-HD-1080p/chunks.m3u8"],
	
	["HBO", "movies", "https://archello.s3.eu-central-1.amazonaws.com/images/2019/05/31/1HBO-Seattle-2016--7-.1559288571.1657.jpg","http://50.7.161.82:8278/streams/d/Hbo/playlist.m3u8"],
	
	
	
	["HBO Signature", "movies", "http://janprerovsky.com/wp-content/uploads/2016/08/PREROVSKY-PHOTOGRAPHY1-8086.jpg","https://liveorigin01.hbogoasia.com:8443/origin/live/main/SIG/index.m3u8","https://liveorigin01.hbogoasia.com:8443/origin/live/main/SIG/5.m3u8"],
	
	//["HBO Hits", "movies", "http://architizer-prod.imgix.net/media/1446057948173march_hbo_office1.jpg?w=1680&cs=strip&auto=format,compress&q=60","https://liveorigin01.hbogoasia.com:8443/origin/live/main/HITS/index.m3u8"],

	["Cinemax", "movies", "https://assetsmysky.blob.core.windows.net/assetsmysky/production/plans-and-bundles/1506916553_cinemax.jpg","https://livecdn.fptplay.net/hda1/cinemax_hls.smil/playlist.m3u8"],

	["Star Movies HD", "movies", "https://content.osn.com/bob/745x419/STM.jpg","http://221.120.204.4/STAR-MOVIEAS-LOCKLE/tracks-v1a1/mono.m3u8"],
	
	
	["Dubai One", "movies", "https://x-architects.com/uploads/news/original/87884Y9PC0SK9P3Y8MSI775775665910700.jpg","https://dminnvll.cdn.mangomolo.com/dubaione/smil:dubaione.stream.smil/chunklist_b1800000.m3u8"],
	
	//["Dubai One - Movies", "movies", "https://x-architects.com/uploads/news/original/87884Y9PC0SK9P3Y8MSI775775665910700.jpg","http://dminnvll.cdn.mangomolo.com/dubaione/smil:dubaione.stream.smil/chunklist_b380000.m3u8"],

	["Pixl Movies", "movies", "https://images.squarespace-cdn.com/content/v1/5c575f117046801063897e3f/1555280418594-2QB3C8UWPH4FYYARDP3Y/pixl.png?format=2500w","https://frndlymsl.akamaized.net/hls/live/2006426/pixlmsl/pixlmsl/pixl_2000/chunklist.m3u8?hdntl=exp=1627651954~acl=*~data=hdntl~hmac=221178112a6414e16b8444fbd54d98a978a99f5c29c2ee82dd01a127aa184db3"],
	
	//["Fox HD", "movies", "https://kdvr.com/wp-content/uploads/sites/11/2019/03/gettyimages-891961568.jpg?w=2560&h=1440&crop=1","https://htv-drm-live-cdn.fptplay.net/CDN-FPT02/FOX-HD-1080p/chunks.m3u8"],


	["Local Now Elevation", "movies", "https://f9q4g5j6.ssl.hwcdn.net/60afed8edf73655e020c6f75/900","https://linear-210.frequency.stream/dist/localnow/210/hls/master/playlist.m3u8"],	
		
	["Local Now Zen", "movies", "https://f9q4g5j6.ssl.hwcdn.net/5fd9322332850459227a39b8/900","https://linear-125.frequency.stream/dist/localnow/125/hls/master/playlist.m3u8"],


	["Local Now Discover", "movies", "https://f9q4g5j6.ssl.hwcdn.net/60481e10fa33524246049ac3/900","https://linear-145.frequency.stream/dist/localnow/145/hls/master/playlist_1024x576.m3u8"],

	
	["Local Now Drama", "movies", "https://i.ytimg.com/vi/ztv94n-GuVM/hqdefault.jpg","https://linear-141.frequency.stream/dist/localnow/141/hls/master/playlist.m3u8"],	
	
	["Local Now Romantique", "movies", "https://f9q4g5j6.ssl.hwcdn.net/604819fcb99c5b3ca1689cf2/900","https://linear-152.frequency.stream/dist/localnow/152/hls/master/playlist_1280x720.m3u8"],	
	
	
	["Local Now Fear This", "movies", "https://tv.mobistream.co.za/uploads/png/f32481c01610e12a8aa9422786f1dbec.png", "https://linear-163.frequency.stream/dist/localnow/163/hls/master/playlist_1280x720.m3u8"],

		
	["Local Now Family Flix", "movies", "https://www.lookhu.tv/uploads/tv_image/family-flix.jpg","https://linear-137.frequency.stream/dist/localnow/137/hls/master/playlist_1280x720.m3u8"],
	
	
	["Local Now That’s Funny", "movies", "https://f9q4g5j6.ssl.hwcdn.net/6014757daa89d94e1960b8e0/900","https://linear-135.frequency.stream/dist/localnow/135/hls/master/playlist_1024x576.m3u8"],
	

	["Stirr Charge!", "movies", "https://watchcharge.s3.amazonaws.com/uploads/2020/10/CHG_1200x587.png","http://content.uplynk.com/channel/37eb732888614810b512fdd82604244e.m3u8"],

	["Stirr Crackle", "movies", "https://www.techrika.com/wp-content/uploads/2021/09/crackle-com-activate.jpg","http://crackle-xumo.amagi.tv/playlist.m3u8"],

	["Stirr Filmrise", "movies", "https://filmrise.com/uploads/images/_medium/Splash-Option-4.1HD.jpg","https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxfilmrisefreemovies/CDN/playlist.m3u8"],

	//["Film Hub", "movies", "","https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxfilmhub/CDN/playlist.m3u8"],
	
	["STIRR Mystery Science Theater", "movies", "https://f9q4g5j6.ssl.hwcdn.net/6014757daa89d94e1960b8e0/900","https://dai.google.com/linear/hls/event/rmBGeSwhQEG64TrT0_JO2A/master.m3u8"],

	["Stirr Popstar!", "movies", "https://image.roku.com/developer_channels/prod/612c2c67a93a6e7fac4bbb51719da0aea9ecec392baaac6a2e9e5ac1b41e3c88.png", "https://dai.google.com/linear/hls/event/cJFuxTLzQUqbGGrqTMBJuw/master.m3u8"],
	
	//["Fox Action", "movies", "","https://mhdtvworld.xyz/delta/flix/max.php?id=3616533&e=.m3u8"],
	
	//["ESPN", "news", "","https://mhdtvstreams.in.net/redbox/hahaha.php?id=2928&e=.m3u8"],
	
	
	//["Zee UK", "news", "","https://z5ams.akamaized.net/zeetvsduk/tracks-v4a1/hdntl=exp=1626927640~acl=%2f*~data=hdntl~hmac=27fff55c074967d1e932e47025c3c28d5ba7a7ab44cbeed3a0ccd22a5f9084c3/mono.m3u8"],
	
	//["And Xplor HD", "news", "","https://z5ams.akamaized.net/out/v1/525714a3beef4b6a8eac1ca96ffd8f88/hdntl=exp=1626926320~acl=%2f*~data=hdntl~hmac=d18ed932b3f9a0dfbd913227b0353e28368d8fca1d7a0c86b2b857a14fefc82d/index_36.m3u8"],
	
	//["And TV HD", "news", "","https://z5ams.akamaized.net/out/v1/525714a3beef4b6a8eac1ca96ffd8f88/hdntl=exp=1626927139~acl=%2f*~data=hdntl~hmac=756911383196e1c507db7d78dcdd7ddd2a2d8b78fda7e2de8f698caefb3ac1f9/index_36.m3u8"],
	

	//["Ez Mall", "lifestyle", "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/08/01/712051-ezmall-080118.jpg", "http://14.199.164.20:4001/play/a0rl/index.m3u8"],
	

	//["Naaptol", "lifestyle", "https://image3.mouthshut.com/images/imagesp/925080356s.jpg", "https://m-c049-j2apps.s.llnwi.net/hls/4704.HousefullAction.in_480p/index.m3u8"],
	
	["Docubay India", "lifestyle", "https://www.cannesexpo.com/wp-content/uploads/2019/10/mipcom2019-8-1024x768.jpg", "https://docubayvh.s.llnwi.net/526a07ab-6ae7-4b6c-84a1-159791416484_1000004372_HLS/manifest.m3u8"],

	["Distro Sword and Shield", "lifestyle", "https://lh3.googleusercontent.com/MBiL3YNb2xMupVNMSTR7RA0H1agoBd1T-ogjiW8K6am63yVDKAPIHkOydVYA74d7mSE=w1024-h500", "https://a.jsrdn.com/broadcast/9e63a1b236/+0000/c.m3u8"],

	["Animal Kingdom", "lifestyle", "","https://j78dp346yq5r-hls-live.5centscdn.com/safari/live.stream/playlist.m3u8"],

	["Animal Planet Hindi", "lifestyle", "https://dcom-prod.imgix.net/files/538428338FF64CE38F11D0F2535E1DB2.jpg","https://idvd.multitvsolution.com/idvo/aphdhindi_540p/index.m3u8"],

	["Discovery HD Hindi", "lifestyle", "https://1.bp.blogspot.com/-IWzRnT0xWHA/Xo9MVXY2sdI/AAAAAAAABDM/ZSScvG6XvPIEe4KBsg643tAM-9e2sF3TQCLcBGAsYHQ/s1600/discovery-channel-Hindi.webp","https://feed.play.mv/live/10005200/2Lkn0sCJBz/master.m3u8"],

	["Discovery HD HGTV", "lifestyle", "https://i.ytimg.com/vi/8C7jfO-8ZIM/maxresdefault.jpg","http://58.65.171.202:8000/play/4334/index.m3u8"],
		
	["Love Nature", "lifestyle", "https://www.tvbeurope.com/wp-content/uploads/2019/01/love-nature482.jpg","https://bamus-eng-roku.amagi.tv/playlist1080p.m3u8"],
	
	["TLC HD", "lifestyle", "https://2.bp.blogspot.com/-j3fj895JSPk/Ul_X3MZacmI/AAAAAAAAyF0/x0iIyVM2v-s/s1600/TLC+Entertainment+logo.jpg", "https://idvd.multitvsolution.com/idvo/tlchdhindi_540p/index.m3u8"],
	
	["Food Food", "lifestyle", "https://i.ytimg.com/vi/dx2sCxmpY8I/maxresdefault.jpg", "https://m-c07-j2apps.s.llnwi.net/hls/7005.FoodFoodChannel.in_480p/index.m3u8"],
	
	["Crafty Panda - Taste It", "lifestyle", "https://tv.mobistream.co.za/uploads/png/4a95e3ca3e8f98d7374c05a8bf0ca9a9.png", "https://stitcheraws.unreel.me/wse-node02.powr.com/live/5af61f59d5eeee7af3d1db8f/playlist.m3u8"],
	
	["Comedy Hub - Just for Laugh", "lifestyle", "https://images.squarespace-cdn.com/content/v1/528b55afe4b04d10f50b4f75/1614163275147-RXUVNDG1Q4F4QAZ7Q8JR/comedyhub3.jpg", "https://uksono1-samsunguk.amagi.tv/playlist.m3u8"],
	
	["Sylt1 - Germany", "lifestyle", "https://designenlassen1.s3.amazonaws.com/6/631376/designs/11_135125.png", "https://5aec29c5dd23b.streamlock.net:8443/sylt1/sylt1_high1.stream/playlist.m3u8"],
	
	["Tastemade", "lifestyle", "https://www.tubefilter.com/wp-content/uploads/2015/12/Tastemade-40-Million-Series-D-Funding-1920x1131.jpg", "https://tastemade-freetv16min-plex.amagi.tv/hls/amagi_hls_data_tastemade-tastemadefreetv16-plex/CDN/playlist.m3u8"],
	
	["Tastemade Travel", "lifestyle", "https://i.ytimg.com/vi/aO4miDfiZ1I/maxresdefault.jpg", "https://tastemadetravel-vizio.amagi.tv/playlist.m3u8"],
	
	["Good Times", "lifestyle", "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2fcontent%2f20160517230222666725_good-times.gif&h=570&w=855&q=100&v=20170226&c=1", "https://m-c049-j2apps.s.llnwi.net/hls/8059.NDTVGoodTimes.in.m3u8"],
		
	["Travel XP", "lifestyle", "https://www.traveldailymedia.com/assets/2018/04/Travelxp-4K.jpg", "http://new-pro.tv:8080/Fernando/123321/84208"],
	
	
	["Travel XP", "lifestyle", "https://www.traveldailymedia.com/assets/2018/04/Travelxp-4K.jpg", "https://travelxp-travelxp-1-eu.rakuten.wurl.com/manifest/playlist.m3u8"],


	//https://www.bizasialive.com/wp/wp-content/uploads/2017/12/travelxp001.jpg
	//https://i.ytimg.com/vi/EE-wM32J7qc/maxresdefault.jpg

	//["FTV - Mumbai", "lifestyle", "https://qqcdnpictest.mxplay.com/pic/10000000960420000/en/16x9/320x180/4E01C26FC698070E0B34926E2963FE3FDF74B683.jpg", "https://m-c037-j2apps.s.llnwi.net/hls/8069.FashionTVMumbai.in_480p/index.m3u8"],

	//["FTV F-Men", "lifestyle","https://www.logolynx.com/images/logolynx/27/27ecf4bed71f09d6ecbe9f7f39f95401.png","https://fash1043.cloudycdn.services/slive/_definst_/ftv_ftv_pg13_zw9_27065_ftv_pg13_196_hls.smil/chunklist_b1400000_t64NDgwcA==.m3u8"],
	
	//["FTV Midnight Haute", "lifestyle hiddenZ","https://live-tv-channels.org/pt-data/uploads/logo/fr-ftv-midnight-secrets-1304-316x237.jpg","https://fash1043.cloudycdn.services/slive/_definst_/ftv_ftv_midnite_k1y_27049_midnite_secr_108_hls.smil/chunklist_b4700000_t64MTA4MHA=.m3u8"],

	//["Cars & Stars", "lifestyle", "https://i0.wp.com/www.talking-heads.tv/wp-content/uploads/2017/08/3.jpg", "https://m-c010-j2apps.s.llnwi.net/hls/8027.CarsAndStars.in_480p/index.m3u8"],
	




	//["WION", "international", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d4e11668225703.5b55e2b9c992c.jpg", "https://d3neuepii3rf1i.cloudfront.net/v1/manifest/8fe6b38eb3580727128fa5d6759fbc48b3ec1c7e/Zee_News_MT_POC/1a6a6d41-a885-4ba9-af49-78a1fe3f72dd/2.m3u8"],
	
	["CNN", "international", "https://www.wspa.com/wp-content/uploads/sites/53/2020/06/AP18297639328586.jpg?w=2560&h=1440&crop=1","https://cnn-cnninternational-1-de.samsung.wurl.com/manifest/playlist_1280x720_3000k.m3u8"],
	
	["Fox Now", "international", "https://www.wfla.com/wp-content/uploads/sites/71/2019/03/fox20disney_1553095201798.jpg_78362155_ver1.0.jpg?strip=1","https://fox-foxnewsnow-samsungus.amagi.tv/playlist.m3u8"],


	["SKY News 1", "international", "https://i.imgur.com/WvNd8yg.png", "https://skynews2-plutolive-vo.akamaized.net/cdhlsskynewsamericas/1013/latest.m3u8?serverSideAds=true"],

	["SKY News 2", "international", "https://tbivision.com/files/2016/08/sky-italia-hq.png","https://skynews2-plutolive-vo.akamaized.net/cdhlsskynewsamericas/1013/06.m3u8"],
	
	["CBS News", "international", "https://media1.s-nbcnews.com/i/rockcms/2021-04/911/210409-cbs-news-nyc-se-1024a-959002_65b20002fd6dbaaa90a68272d4ccf3d2db6e3a34.jpg","https://cbsnewshd-lh.akamaihd.net/i/CBSNHD_7@199302/index_500_av-p.m3u8?sd=10&rebase=on"],
	
 	["Rtve - Spain", "international", "https://i1.wp.com/www.publicmediaalliance.org/wp-content/uploads/2017/10/8301208726_b952558f97_k.jpg?fit=2048%2C1639&ssl=1","https://rtvelivestreamv3.akamaized.net/24h_main_dvr_720.m3u8"],
	
	//["Kanal 10 - Sweden", "international", "", "https://cdn-kanal10.crossnet.net/kanal10/ngrp:kanal10sverige_all/chunklist_w1136284035_b2828000.m3u8"],
	
	["Di TV - Sweden", "international", "https://gujims.com/media/cache/thumbnail/uploads/assets/68c08e06d895607aab91feb284d0fc881e42e459.jpeg", "https://httpcache0-03837-cachelive2.dna.ip-only.net/03837-cachelive2/smil:03837_tx4_720p/chunklist_b1928000.m3u8"],
	
	
	
	["LFM - Switzerland", "international", "https://live-tv-channels.org/pt-data/uploads/logo/ch-lfm-tv-8957.jpg", "https://edge7.vedge.infomaniak.com/livecast/ik:lfmmd/chunklist_w1309792299_b1600000.m3u8"],
	
	["RFO - Germany", "international", "https://upload.wikimedia.org/wikipedia/commons/f/f8/RFO_Senderlogo.svg", "https://stream01.stream.welocal.world/stream/fhd-rfo_66876/ngrp:stream_all/chunklist_w1488927930_b3628000.m3u8"],
	
	["Tagesschau - Germany", "international", "https://www.tagesschau.de/multimedia/bilder/tagesschausendungsbild-101~_v-videowebl.jpg", "https://derste247livede.akamaized.net/hls/live/658317/daserste_de/master.m3u8"],

	//["Sparhandy - Germany", "international", "https://live-tv-channels.org/pt-data/uploads/logo/de-sparhandy-tv-1174.jpg","http://sparhandytv-live.hls.adaptive.level3.net/ses/sparhandytv/stream1/streamPlaylist.m3u8"],
	
	["DW - India", "international", "https://mediasat.info/wp-content/uploads/2015/06/dw_en_1200.jpg", "https://m-c010-j2apps.s.llnwi.net/hls/8023.DWEnglish.in_480p/index.m3u8"],
	
	["DW - Deutsche Welle News", "international", "https://www.ndr.de/deutschewelle166_v-contentxl.jpg", "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"],
	
	
	["BBC World News", "international", "https://ichef.bbci.co.uk/images/ic/1200x675/p04fqyng.jpg", "http://103.199.161.254/Content/bbcworld/Live/Channel(BBCworld)/index.m3u8"],
	
	["RT - Russia Today", "international", "https://im-media.voltron.voanews.com/Drupal/01live-166/2019-04/8556B79F-5B44-4B45-8795-92A2C69FEA9D.jpg", "https://rt-news-gd.secure2.footprint.net/1103_4500Kb.m3u8"],

	["RT Documentary", "international", "https://im-media.voltron.voanews.com/Drupal/01live-166/2019-04/8556B79F-5B44-4B45-8795-92A2C69FEA9D.jpg", "https://rt-rtd.gcdn.co/live/rtdoc/playlist.m3u8"],
	
	
	["RBC - Russia", "international","https://media.newyorker.com/photos/590976e88b51cf59fc423317/master/pass/Lipman-TheDemiseofRBC.jpg","http://online.video.rbc.ru/online/rbctv_480p/index.m3u8"],

	["France 24", "international", "https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/medias-tele/coronavirus-le-role-essentiel-des-medias-public-internationaux-dans-la-lutte-contre-les-fake-news-3971039/55233501-1-fre-FR/Coronavirus-le-role-essentiel-des-medias-public-internationaux-dans-la-lutte-contre-les-fake-news.jpg", "https://m-c08-j2apps.s.llnwi.net/hls/7007.France24.in_480p/index.m3u8"],

	["Euro News - France", "international", "https://static.euronews.com/articles/stories/04/02/10/68/1440x810_cmsv2_0da2be17-012f-5974-8da0-335c816629d1-4021068.jpg", "https://m-c08-j2apps.s.llnwi.net/hls/7006.EuroNews.in_480p/index.m3u8"],
	
	["Euro News - France", "international", "https://lh5.googleusercontent.com/p/AF1QipMfrQIU1TuwIflNRp0g-lnBqkGyCFuofGPaDjqj=w1365-h768-k-no", "https://m-c08-j2apps.s.llnwi.net/hls/7006.EuroNews.in_480p/index.m3u8"],

	["Alsace 20 - France", "international", "", "http://live.alsace20.fr/live/alsace20/ngrp:alsace20_all/playlist.m3u8"],
	
	//["DBM - France", "international", "https://www.dbm-tv.fr/wp-content/uploads/2017/12/logo-dbm.png", "https://dbmtv.vedge.infomaniak.com/livecast/smil:dbmtv.smil/manifest.m3u8"],
	
	["TV5 Monde - France", "international", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/60dd87100792751.5f10699fb3b80.png", "https://m-c08-j2apps.s.llnwi.net/hls/7008.TV5MondeASIE.in_480p/index.m3u8"],
	
	
	
	
	["SKY News - UK", "international", "https://www.tvnewsroom.co.uk/wp-content/uploads/wallpapers/skynews-2010.jpg", "https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1&mute=1"],

	["Al Jazeera - Qatar", "international", "https://cms.qz.com/wp-content/uploads/2013/07/aljazeera.jpg?quality=75&strip=all&w=1600&h=900&crop=1","https://www.youtube.com/embed/-upyPouRrB8?autoplay=1&mute=1"],

	["TRT World - Turkey", "international", "https://i.ytimg.com/vi/XqIsoh5Gsyo/maxresdefault.jpg", "https://tv-trtworld.live.trt.com.tr/master.m3u8"],

	["CNA - Singapore", "international", "https://i.ytimg.com/vi/UidT9twuiDI/maxresdefault.jpg", "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8"],

	["NHK - Japan", "international", "https://cdn.newsapi.com.au/image/v1/37969cb984ffb8aa03962b8122e525ef", "https://nhkwlive-xjp.akamaized.net/hls/live/2003458/nhkwlive-xjp-en/index_1M.m3u8"],
	
	["Arirang - Korea", "international", "https://m.cjolivenetworks.co.kr:447/CJSUPFiles/20210302/19D42DD10D194CFAAFB49A3954D3E29E.JPG", "http://amdlive-ch01.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8"],



	//["BBC News", "international", "", "https://edge-1192-ch-gv.filmon.com/live/27.low.stream/playlist.m3u8?id=0ad5aac39bb13fbe51621ceb2ad6e1f6ebb3181a15be5f91f80111016a55d6e9a1abcad4280315fd4f8666c0f80ef126bcbdc676f724d552dad33400073cb0144c8cf0c675ae4d1b4846ab7466e40d767489f698a6bb839b1a30131833f9ddaa8465748a100b5c386a0c7d70b75f1041b83185372596bd355cab757234b1874174333e927bf1ff23c7603cbbf769c2811e5116bc283efeb0"],
	
	
	["UN Web TV", "international", "https://i.ytimg.com/vi/hS8R3b4S2K0/maxresdefault.jpg", "https://klive.kaltura.com/s/env/cluster-1-a.live.nvp1/live/hls/p/2503451/e/1_gb6tjmle/tl/main/st/0/t/uYhrbwe_cdHQa5s1jLb8SQ/index-s36.m3u8?__hdnea__=st=1627903180~exp=1627989580~acl=/s/env/cluster-1-a.live.nvp1/live/hls/p/2503451/e/1_gb6tjmle/tl/main/st/0/t/uYhrbwe_cdHQa5s1jLb8SQ/index-s3*~hmac=2f937506cda9cfc4a37a5ee6b7aaa114b2c819a0a1eec4b2b703989529eadd14"],
	
	
	["USA Today", "international", "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_32/2960356/190805-usa-today-ew-355p.jpg", "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00731-gannettcoinc-usatodaynews-plex/3c26bcb9-2e9c-450b-8604-f5fb603ecca8/1.m3u8"],
	
	["Reuters Now", "international", "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TDM2WP7ZJNMIRGGVQ4VEDJY2WU.jpg", "https://32ce4aad1eed49b1ba2999fb68d119c8.mediatailor.us-east-1.amazonaws.com/v1/manifest/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Plex_ReutersNow/d9d496d6-6711-4ac5-8571-c2997fd9c13e/7.m3u8"],
	//https://mir-s3-cdn-cf.behance.net/project_modules/1400/46482891240311.5e2c98ca56a5d.jpg
	//https://images.prismic.io/ueno-www/025e3c67-c360-4242-9521-16691188b0b3_reuters_tv_seo.jpg
	//https://i.vimeocdn.com/video/848812228_1280x720.jpg
	
	["Kid Central", "international", "", "hhttps://simultv.s.llnwi.net/o058/KidCentral/interlink.m3u8"],
	
	["IDG - PCWorld", "international", "", "http://a.jsrdn.com/broadcast/529a360c04/+0000/high/c.m3u8"],

	["IGN One", "international", "https://images.squarespace-cdn.com/content/v1/54922ad6e4b06822d6dbd334/1434325781658-3U08GQQTMHOBTO0BHC8C/IMG_7172.jpeg?format=1000w", "https://ign-plex.amagi.tv/amRdirect/us_privacy=1---&did=68c76dbf-12a1-5b6f-a538-a75fe1cbd790&dnt=0&X-Plex-Token=sDBxGsM7f5HSsD2SGcFD&channelId=5eea605474085f0040ddc77c/hls/amagi_hls_data_ignAAAAAA-ign-plexA/CDN/768x432_1425600/index.m3u8"],
	
	["SCTV Social Club", "international", "https://socialclub.social/wp-content/uploads/2020/08/mockup-8824e4a0.jpg", "https://stream-us-east-1.getpublica.com/cl/cbf7d55e-882b-439d-a000-b70ef0083023/1280x720_2300000_4_false.m3u8"],
	
	["Revry", "international", "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1160438696001/b0176ec9-9f88-4ef2-9318-5ff2e9861389/8bae6b1c-80f9-4474-860b-3dbefcf6d88b/1280x720/match/image.jpg", "https://80b6878a343a4c37ae7c81c26e367b59.mediatailor.us-west-2.amazonaws.com/v1/manifest/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-5-REVRY-PLEX/33a801b9-74bc-4368-ab9d-368901b0972a/0.m3u8"],
	//https://filmination.jp/assets/img/page/news/024/01.jpg
		
	
	
	["Wild Earth", "international", "https://i.ytimg.com/vi/5PRpF9e-fQs/maxresdefault.jpg", "https://wildearth-plex.amagi.tv/amRdirect/us_privacy=1---&did=68c76dbf-12a1-5b6f-a538-a75fe1cbd790&dnt=0&X-Plex-Token=sDBxGsM7f5HSsD2SGcFD&channelId=60d4edddb2fdec002c141135/hls/amagi_hls_data_plexAAAAA-wildearth-plex/CDN/768x432_1425600/index.m3u8"],
	
	["Outdoor America", "international", "https://images-na.ssl-images-amazon.com/images/I/91+jfPQKEBL._RI_.jpg", "https://d18toqrnfyz3v1.cloudfront.net/v1/manifest/9d062541f2ff39b5c0f48b743c6411d25f62fc25/OutdoorAmerica-PLEX/2591f31b-2efa-4b17-8ee8-e22b555a66c9/0.m3u8"],
	
	["GoUSA", "international", "https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/media_card/2020-06/004e5059-2556-48c6-82db-d92b71df2112.jpeg?itok=fNhhSw9Y", "https://a7ea429b0854458daac9f78715c8093f.mediatailor.us-east-1.amazonaws.com/v1/manifest/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Plex_GoUSATV/f18c2e0d-dde8-4601-9ec8-b1b178c4efe2/5.m3u8"],
	
	["GoTraveler", "international", "https://images-eu.ssl-images-amazon.com/images/I/91bky0pmcGL.jpg", "https://stream-us-east-1.getpublica.com/cl/1a758d3c-119f-4079-8e16-54d0dfc5c292/960x540_900000_2_false.m3u8"],
	//https://www.gonomad.com/wp-content/uploads/2020/09/GoTraveler_Cover-General.jpg
	
	["Motorvision.TV", "international", "https://provider-static.plex.tv/epg/images/ott_channels/arts/motorvision_artwork_horizontal.jpg", "https://dai2-xumo.fubo.tv/amagi_hls_data_xumo1212A-motorvisiontv/CDN/master.m3u8"],
	
	["Fido Pet TV", "international", "https://www.digitaltveurope.com/files/2021/09/Fido-TV.png", "https://fidotv-roku.amagi.tv/playlist.m3u8"],
	
	
	["Pet Collective", "international", "https://i.ytimg.com/vi/RT_uu27llLY/maxresdefault.jpg", "https://dai2.xumo.com/amagi_hls_data_xumo1212A-petcollective/CDN/master.m3u8"],


	["Fail Army - International", "international", "https://cdn.mos.cms.futurecdn.net/ihUYSchDUXeKANkJZTv4ci-650-80.jpg.webp", "https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxfailarmy/CDN/playlist.m3u8"],	 

	["Fail Army", "international", "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/vqy2m-JWB47YSQ509-Full-Image_GalleryBackground-en-US-1509558966063._RI_.jpg", "https://failarmy-linear.vizio.wurl.com/manifest/playlist.m3u8"],
	
	["Fail Army - STIRR", "international", "https://assets.recogmedia.net/1/113/Entry_Uploads/169748-thumb.jpg", "https://dai.google.com/linear/hls/event/7tuuoX1wSsCTaki1HqJFYw/master.m3u8"],
	
	
	["People are Awesome", "international", "https://deadline.com/wp-content/uploads/2020/08/paa_dc_16x91.jpg?w=1024", "https://dai2.xumo.com/amagi_hls_data_xumo1212A-peopleareawesome/CDN/playlist.m3u8"],
	
	["Weather Spy", "international", "https://f1.media.brightcove.com/8/4794656764001/4794656764001_6153538008001_6153542701001-vs.jpg?pubId=4794656764001&videoId=6153542701001", "https://jukin-weatherspy-1.vizio.wurl.com/manifest/playlist.m3u8"],

	["Just for laugh gags", "international", "https://upload.wikimedia.org/wikipedia/commons/e/ee/Just_for_Laughs_Gags_Logo.png", "https://dai2.xumo.com/amagi_hls_data_xumo1212A-rokujustforlaughsgags/CDN/master.m3u8"],
	
	
	
	["Red Bull", "international", "https://wallpaperaccess.com/full/563870.jpg", "https://rbmn-live.akamaized.net/hls/live/622817/BoRB-US/master_928.m3u8"],
	
	//["Nickelodeon HD", "international", "", "http://c0.cdn.trinity-tv.net/stream/7tsewn83ddjifz69us9je7eftbm5nuausb4dsvz9g5aydin9672n734qbb9jgcfpiqtpwudvs9dpi2udjc3eh4h462eie5azjmfbfgfjeqfuhjmmgx9zuj736ijg7nffhf8rviq5svkgxbp639y9nfgc.m3u8"],
	
	//["Nat Geo - Wild", "international", "", "http://50.7.161.82:8278/streams/d/Natgeowild/playlist.m3u8"],
	
	["Alchimie Movies Central", "international", "https://ipohub.blob.core.windows.net/logos/bc082357-60ec-4c7e-9f4c-eec5d137d9b4.png", "https://alchimie-movies-central-2-gb.samsung.wurl.com/manifest/playlist.m3u8"],
		
	//["Real Family - Movies", "international", "", "https://rbmn-live.akamaized.net/hls/live/622817/BoRB-US/master_928.m3u8"],
	
//	["Red Net - Movies", "international", "", "https://rbmn-live.akamaized.net/hls/live/622817/BoRB-US/master_928.m3u8"],
		
	
//	["Planeta RTR - Russia", "international", "", "https://rbmn-live.akamaized.net/hls/live/622817/BoRB-US/master_928.m3u8"],

	
	["PrimeAsia Punjabi - Canada", "international", "https://ghaintnet.akamaized.net/GhaintPunjab/britasiatv-primeasiatv-ghaintpunjab.jpg", "http://primeasia.dyndns.tv:8080/Live_web_250/tracks-v1a1/mono.m3u8"],


	["Dust - Gunpowder & Sky", "international", "https://fpfqj8ac-sinclair.asset.cdn.remoco.tv/image/resource/5b351bd2e95b5a000ae0ce11/poster_16-9/OkquZT2O/original.jpg", "https://dai.google.com/linear/hls/event/xuMJ1vhQQDGjEWlxK9Qh4w/master.m3u8"],
	
	["Dust - International", "international", "https://deadline.com/wp-content/uploads/2018/11/dustx-logo.jpg", "https://dust-samsung-uk-de.samsung.wurl.com/manifest/playlist.m3u8"],
	
	["Dust - Alter", "international", "https://i.ytimg.com/vi/BWY7EH9AFRM/maxresdefault.jpg", "https://dust.sinclair.wurl.com/manifest/playlist.m3u8"],

	["Dust - UK", "international", "https://i.ytimg.com/vi/nAuYKQ-j86s/maxresdefault.jpg", "https://dust-gb.samsung.wurl.com/manifest/playlist.m3u8"],
	
	["ABC - Australia", "international", "https://www.abc.net.au/news-web/assets/fallback-image_2150x1210.jpg", "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8"],

	
	["Wonder - Lifestyle", "international", "https://yt3.ggpht.com/ytc/AKedOLTheYWzUjCrSJzVgTMk_p_Ti5Ey86EkYf6wcsgw3Q=s900-c-k-c0x00ffffff-no-rj", "https://lds-wonder-rakuten.amagi.tv/playlist.m3u8"],
	
	
	["Stingray Greatest Hits", "international", "https://d14c63magvk61v.cloudfront.net/hls/22865/stingray-greatest-hits/thumbh_20200717_232723.jpg", "https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxstingraygreatesthits/CDN/playlist.m3u8"],
	
	["Stingray Flashback", "international", "https://mediafile.galaxie.ca/data/000/123/662/000123662240", "https://ott-linear-channels.stingray.com/v1/master/734895816ccb1e836f8c1e81f772244d9be0077c/115/master.m3u8"],
	
	["Stingray Karaoke", "international", "https://d1epjnee0y8w64.cloudfront.net/blog/s3fs-public/2018-04/1200x628_IOS_SK.jpg", "https://dai.google.com/linear/hls/event/5bqbG8j7T_6_qMONC1SDsg/master.m3u8"],
	
	["Stingray Karaoke - Sweden", "international", "https://about.rogers.com/wp-content/uploads/2020/06/karaoke-scaled-e1591193993883.jpg", "https://stingray-karaoke-3-se.samsung.wurl.com/manifest/playlist.m3u8"],
	
	
	["Timeline - History", "international", "https://dynamiteevents.co.uk/wp-content/uploads/2020/03/DYNAMITE_TIMELINE-TV-CHRISTMAS-PARTY_Carousel.jpg", "https://lds-timeline-plex.amagi.tv/playlist.m3u8"],
	//https://www.animationuk.org/wp-content/uploads/2021/01/timelinetvbroadcastapp.png
	
	
	["A&E Reality", "international", "https://images.squarespace-cdn.com/content/v1/566c4efe5a5668242bae4c95/1559421870416-U9TO6JVUOO7M4R0EUKBQ/a%26e+logo.jpg", "https://bk7l2w4nlx53-hls-live.5centscdn.com/AETV/514c04b31b5f01cf00dd4965e197fdda.sdp/playlist.m3u8"],
	

	
	["VEVO", "international", "https://www.teahub.io/photos/full/325-3250734_vevo.jpg", "https://5f3491c50b093e00015a3c4c-samsung.eu.ssai.zype.com/5f3491c50b093e00015a3c4c_samsung_eu/manifest.m3u8"],
	
	//["VEVO 90's", "international", "", "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5fd7bb1f86d94a000796e2c2/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=rokuChannel&deviceMake=rokuChannel&deviceDNT=1&advertisingId=channel&embedPartner=rokuChannel&appName=rokuchannel&is_lat=1&bmodel=bm1&content=channel&platform=web&tags=ROKU_CONTENT_TAGS&coppa=false&content_type=livefeed&rdid=channel&genre=ROKU_ADS_CONTENT_GENRE&content_rating=ROKU_ADS_CONTENT_RATING&studio_id=viacom&channel_id=channel"],

	//["VH1", "movies", "https://www.brief-case.co/projects/g/ComDes_VH1_leader.jpg", "https://content.uplynk.com/channel/36953f5b6546464590d2fcd954bc89cf.m3u8"],

	["VH1", "international", "https://i.ytimg.com/vi/V7V-atgmeA4/maxresdefault.jpg", "https://content.uplynk.com/channel/36953f5b6546464590d2fcd954bc89cf.m3u8"],	
	
	["Channel V", "international", "https://yt3.ggpht.com/ytc/AKedOLRor1ebCjmPZZ6jm505HCu4kVnXUEus7vwdRSMd=s900-c-k-c0x00ffffff-no-rj","https://htv-drm-live-cdn.fptplay.net/CDN-FPT02/CHANNELV-HD-1080p/chunks.m3u8"],

	
	
	
	["1HD - Music", "international", "https://iks-online.net/wp-content/uploads/2018/12/Telekanal-1HD-muzykalnyj.jpg", "http://1hdru-hls-otcnet.cdnvideo.ru/onehdmusic/tracks-v1a1/index.m3u8"],	
	
//	["1Mus Hungary - Music", "international", "", "http://hz1.teleport.cc/HLS/HD.m3u8"],	
	
	["Pop TV - Movies", "international", "https://cdn.poptv.com/1804785680-29101_poptv_movie_banner.jpg", "https://live-poptv-fastly-prod.global.ssl.fastly.net/pop/master.m3u8"],
	
	["Filmstream", "international", "https://shareomaha.org/sites/default/files/media/223/DundeeTheaterbyHarrisonMartin.jpg", "https://spi-filmstream-1.plex.wurl.com/manifest/playlist.m3u8"],
	
	
	["Spotlight", "international", "https://image.roku.com/developer_channels/prod/612c2c67a93a6e7fac4bbb51719da0aea9ecec392baaac6a2e9e5ac1b41e3c88.png", "https://spotlight-vizio.amagi.tv/playlist.m3u8"],
	
	
	
	["InBites", "international", "https://advanced-television.com/wp-content/uploads/2020/12/InsightTV.jpg", "https://inshort-samsungindia.amagi.tv/playlist.m3u8"],
	
	["InSight", "international", "https://i.ytimg.com/vi/M0YcQUGQqaQ/maxresdefault.jpg", "https://insighttv-samsungindia.amagi.tv/playlist.m3u8"],
	
	["InTrouble", "international", "https://i1.wp.com/www.broadbandtvnews.com/wp-content/uploads/2020/02/Insight-TV-Global-Rebrand.jpg?fit=1200%2C800&ssl=1", "https://introuble-samsungindia.amagi.tv/playlist.m3u8"],
	
	["InWild", "international", "https://i.pinimg.com/originals/fa/70/f7/fa70f777c3c1f244e9fa4b71772e9fa0.jpg", "https://inwild-samsungindia.amagi.tv/playlist.m3u8"],
	
	["InWonder", "international", "https://www.digitalstudiome.com/public/styles/full_img/public/images/2020/01/20/Insight-TV-taps-Amagi-for-OTT-distribution.JPG?itok=ah-eB0jN", "https://inwonder-samsungindia.amagi.tv/playlist.m3u8"],
	
	//["InSight 1", "international", "", "https://dai.google.com/linear/hls/event/KAfBFcVrQgKmHhpzvkEn9A/master.m3u"],
	
	
	
	//["Insight 2", "international", "", "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f06bc60e236570007793f31/master.m3u8?terminate=false&deviceType=web&deviceMake=web&deviceModel=web&sid=e7f6989c-0583-11eb-8b9f-0242ac110002&deviceId=5f06bc60e236570007793f31&deviceVersion=DNT&appVersion=DNT&deviceDNT=1&userId=&advertisingId=&deviceLat=&deviceLon=&app_name=&appName=web&buildVersion=&appStoreUrl=&architecture=&includeExtendedEvents=false&marketingRegion=DE&serverSideAds=false"],
		
	
	
	



	<!-- online radio -->
	["Fun Radio", "communityradio", "https://images.rtl.fr/~c/770v513/funradio/www/289414-un-studio-de-fun-radio.jpg","http://icecast.funradio.fr:80/fun-1-44-128"],
	
	["Radio Caravan US", "communityradio", "https://jointhecaravan.com/wp-content/uploads/2021/05/radio-caravan-show.jpg","https://stream.voxx.pro/radio/8260/radio.mp3"],
	
	["Radio City Smaran", "communityradio", "https://scontent.fdel1-5.fna.fbcdn.net/v/t1.18169-9/62457_616281695091198_1394971087_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=e3f864&_nc_ohc=1SlJAOD31wUAX-wnJBh&tn=MbAVq2-K7VreU5ZZ&_nc_ht=scontent.fdel1-5.fna&oh=a89026d33c6643de5cde49b8a55c74a2&oe=6124D25B","http://prclive1.listenon.in:9950"],

	["Shemaroo Bhakti", "communityradio", "https://m.media-amazon.com/images/S/aplus-media/sc/46726d2b-3d9b-49a0-acbe-5560114bd920.__CR0,0,970,600_PT0_SX970_V1___.png","https://radiobhaktishopping.shemaroo.com/hariomradio/Stream1_aac/chunklist_w1854039901.m3u8"],
	
	
	
	["Kunsh_test", "communityradio", "https://m.media-amazon.com/images/S/aplus-media/sc/46726d2b-3d9b-49a0-acbe-5560114bd920.__CR0,0,970,600_PT0_SX970_V1___.png","http://stream.freemusicradio.nl:8100/stream"],
	
	
	

	["Kirtan Mandali - Vrndavan", "communityradio", "https://iskconnews.org/media/img_versions/2010/06-Jun/24_th_featured.jpg","https://server.24hourkirtan.fm:8000/128k.mp3"],
	
	["Bhakti Sangeet", "communityradio", "https://www.radio.net/images/broadcasts/7f/3f/131351/1/c300.png","https://stream.zeno.fm/ut3kgm1vsa0uv"],
	
	["Bhajan Rajasthani", "communityradio", "img/rajasthanibhajan.jpg","https://stream.zeno.fm/4ukvgz7ydy8uv"],
	
	["Khamma Gani Rajasthan", "communityradio", "img/khammagani.jpg","https://stream.zeno.fm/cc9ez9yydy8uv"], 
	
	["Radio Haryanvi", "communityradio", "img/radioharyana.jpg","http://weareharyanvi.com:8000/listen"],
	
	["Gurgaon Ki Awaaz", "communityradio", "https://i.ytimg.com/vi/0CNuM9agf3I/maxresdefault.jpg","https://audiounites.org/radio/8030/radio.mp3"],
	





	/*start Delhi FM Radio Stations	*/
	
	["Gaana Live Radio", "radio", "https://entrackr.com/wp-content/uploads/2020/09/gaana.jpg.webp","https://stream.zeno.fm/szh14bya1feuv"],
	/*https://entrackr.com/wp-content/uploads/2018/02/gaana-image-1.jpg*/

	["FM 91.1 - Radio City", "radio notavailable", "img/radio-city.jpg","https://radioindia.net/radio/radio-city/icecast.audio"],
	
	["FM 91.1 - Radio City 2", "radio", "img/radio-city.jpg","https://prclive1.listenon.in/"],
	
	
	["FM 92.7 - BIG FM", "radio", "img/radio-big-fm.jpg","http://sc-bb.1.fm:8017/"],

	["FM 93.5 - Red FM", "radio notavailable", "img/radio-red.jpg","https://cdn.videvo.net/videvo_files/audio/premium/audio0186/watermarked/TrainStnPassLounge PE790601_preview.mp3"],
	
	["FM 94.3 - Radio One", "radio notavailable", "img/radio-one.jpg","https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/ambience_bar_small_busy_r&b_music.mp3?_=8"],
	
	["FM 95.0 - Hit FM", "radio notavailable", "img/radio-hit.jpg","https://rainymood.com/audio1112/0.mp3"],

	["FM 98.3 - Radio Mirchi", "radio", "img/radio-mirchi.jpg","http://peridot.streamguys.com:7150/Mirchi"],

	/*pbaudio001*/
	["FM 100.1 - Vividh Bharti", "radio", "img/radio-vividh-bharti.jpg","https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/chunklist.m3u8"],
		
	/*pbaudio004*/
	["FM 102.6 - AIR Rainbow", "radio", "img/radio-rainbow.jpg","https://airhlspush.pc.cdn.bitgravity.com/httppush/hlspbaudio004/hlspbaudio004_Auto.m3u8"],
	
	["FM 104 - Fever FM", "radio", "img/radio-fever.jpg","https://ishq_mumbai-lh.akamaihd.net/i/Ishq_Mumbai_1@855087/index_1_a-p.m3u8?sd=10&rebase=on"],

	/*pbaudio005*/
	["FM 106.4 - AIR Gold", "radio", "img/radio-air-gold.jpg","https://airhlspush.pc.cdn.bitgravity.com/httppush/hlspbaudio005/hlspbaudio005_Auto.m3u8"],

	["FM 107.2 - Radio Nasha", "radio notavailable", "img/radio-nasha.jpg","https://bigsoundbank.com/UPLOAD/mp3/0644.mp3"],


	/* https://onlineradiobox.com/ae/1062bigfm/?cs=ae.1062bigfm */
	
	/*end Delhi FM Radio Stations*/
	

	["FM 91.1 Radio city", "radio", "img/radio-nasha.jpg","https://prclive4.listenon.in/Hindi"],
	
	["Indi pop Radio city", "radio", "img/radio-nasha.jpg","http://prclive1.listenon.in:9910/;"],
	
	["Radio Rock", "radio", "img/radio-nasha.jpg","https://cors.bitwize.com.lb/http://radiopaki.funnypaki.com:8886/;"],
	
	["VDESI", "radio", "img/radio-nasha.jpg","https://stream.radio.co/s42e977b6c/listen"],
	
	["Sound Asia", "radio mp3", "img/radio-nasha.jpg","https://cors.bitwize.com.lb/http://41.72.210.222:88/stream"],
	
	["Radio India", "radio", "img/radio-nasha.jpg","https://www.liveradio.es/http://162.244.80.52:4614/stream"],

	
	["Radio 90.5 FM", "radio mp3", "img/radio-nasha.jpg","https://ice42.securenetsystems.net/CR90?type=.mp3"],
		
	["Meethi Mirchi", "radio", "img/radio-nasha.jpg","https://drive.uber.radio/uber/bollywoodnow/icecast.audio"],

	["Just Music", "radio", "img/radio-nasha.jpg","https://live.wostreaming.net/direct/humfm-fm1062mp3-ibc1"],
	
	["Ujala Radio", "radio", "img/radio-nasha.jpg","https://server4.ujala.nl/stream/2/listen.mp3"],
	
	["Tune India", "radio", "img/radio-nasha.jpg","https://s2.radio.co/se5e166e2f/listen"],

	["Club Mirchi", "radio", "img/radio-nasha.jpg","https://clubmirchihdlive-lh.akamaihd.net/i/ClubMirchiHDLive_1_1@336269/index_1_a-p.m3u8?sd=10&rebase=on"],
	
	["Bollywood and beyond", "radio", "img/radio-nasha.jpg","https://cors.bitwize.com.lb/http://185.80.220.12:8046/live"],
	
	["Bombay Beats", "radio", "img/radio-nasha.jpg","https://strmreg.1.fm/bombaybeats_mobile_mp3"],
	
	["Tarana Radio", "radio", "img/radio-nasha.jpg","https://peridot.streamguys1.com:7150/Tarana.aac"],
	
	
	["Spice Radio", "radio", "img/radio-nasha.jpg","https://d2e1wsg2gpoq0n.cloudfront.net/livecf/CJRJ/media-uldr3on5b_45737.mp3"],
	




	["Bolly FM", "radio", "img/radio-nasha.jpg","https://stream.zeno.fm/zu59ykebs2zuv"],
	
	["Oye India", "radio", "img/radio-nasha.jpg","https://stream.zeno.fm/cgrwb1hd4v8uv"],
	
	["Hits Bollywood", "radio", "img/radio-nasha.jpg","https://node-14.zeno.fm/rqqps6cbe3quv?rj-ttl=5&rj-tok=AAABccQyYG8AGJ3KW_903AafBw"],
	
	["Desi World", "radio mp3", "img/radio-nasha.jpg","https://stream.zeno.fm/4mbfcn4mf24tv"],
		
	["Radio Namkin", "radio", "img/radio-nasha.jpg","https://stream.zeno.fm/yg1qhsbaqv5tv"],
	
	["Radio Antara", "radio", "img/radio-nasha.jpg","https://stream.zenolive.com/x6ch94sse0quv"],
	
	["Radio Pragya Kushinagar", "radio mp3", "img/radio-nasha.jpg","https://stream.zenolive.com/g42tzhe29f8uv"],




	
	
	
	
	
	["Calm - Los Angels", "radio", "img/radio-nasha.jpg","https://streams.calmradio.com:7028/;"],
	
	["Radio Namkin - Los Angels", "radio mp3", "img/radio-nasha.jpg","https://indianlink.radioca.st/streams/128kbps"],
		
	["EBC Radio - Los Angels", "radio mp3", "img/radio-nasha.jpg","https://ice7.securenetsystems.net/WWTR?"],
	
	["Fun Asia - Los Angels", "radio", "img/radio-nasha.jpg","https://funasia.streamguys1.com/live-1?_=1596332823914"],
	
	["Saptarang - Los Angels", "radio", "img/radio-nasha.jpg","https://cors.bitwize.com.lb/http://85.25.185.202:8138/stream"],

	["Desi Maska - Chicago", "radio mp3", "img/radio-nasha.jpg","https://ample.radiojar.com/q9rymqdbeyduv"],
	
	["Easy 96 - Canada", "radio", "img/radio-nasha.jpg","https://ice8.securenetsystems.net/EASY96?type=.mp3"],	
	
	["Radio Dil Se - Canada", "radio", "img/radio-nasha.jpg","https://cp3.shoutcheap.com:18180/stream"],
	


	
	
	
	["Asian Star - UK", "radio mp3", "img/radio-nasha.jpg","https://radio.canstream.co.uk:9067/live.mp3"],

	["Fever FM UK", "radio", "img/radio-nasha.jpg","https://radio.canstream.co.uk:8115/live.mp3"],
	
	["Aap ki Aawaz - UK", "radio", "img/radio-nasha.jpg","https://streaming02.zfast.co.uk/proxy/akram?mp=/stream//?type=http"],
	
	["Spice - UK", "radio mp3", "img/radio-nasha.jpg","https://spice988fm.radioca.st/stream"],
	
	["SBS - UK", "radio", "img/radio-nasha.jpg","https://listen.web-radio.co.uk/proxy/radiosbs/radiosbs"],

	["Jayamala - UK", "radio", "img/radio-nasha.jpg","https://uk2.internet-radio.com/proxy/radiojaymala?mp=/stream"],	
	
	["Awaz - UK", "radio", "img/radio-nasha.jpg","https://node-21.zeno.fm/vbrs8s6zetzuv?rj-ttl=5&rj-tok=AAABc6yrqgkAtI3dZzNfSNXtsg"],
	
	["HiD - Netherland", "radio", "img/radio-nasha.jpg","https://hidradio.live-streams.nl/live"],
	
	["Sangeet - Spain", "radio", "img/radio-nasha.jpg","https://www.radiomast.io/stream/22e2c991-fc0c-4242-8cba-0a64d0aea809/listen?_=1"],
	

	["Olive - Denmark", "radio", "img/radio-nasha.jpg","https://playerservices.streamtheworld.com/api/livestream-redirect/OLIVE1063.mp3"],
	
	["Aasman Radio - Paris", "radio", "img/radio-nasha.jpg","https://aasman_radio.ice.infomaniak.ch/aasmanradio"],

	
	
	
	
	
	
	
	
	["Suno - Dubai", "radio mp3", "img/radio-nasha.jpg","https://eu8.fastcast4u.com/proxy/clyedupq/?mp=/1"],
	
	["106.2 Big FM Dubai", "radio", "img/radio-nasha.jpg","https://funasia.streamguys1.com/live4"],
	/* https://onlineradiobox.com/ae/1062bigfm/?cs=ae.1062bigfm */
	
	["Mirchi 1024 Dubai", "radio", "img/radio-nasha.jpg","https://eu8.fastcast4u.com/proxy/clyedupq/?mp=/1"],

	["Lotus - South Africa", "radio", "img/radio-nasha.jpg","https://playerservices.streamtheworld.com/api/livestream-redirect/LOTUSFM_SC"],
	



	
	
	["HUMM FM - New Zealand", "radio mp3", "img/radio-nasha.jpg","https://cp12.serverse.com/proxy/hummfm?mp=/live"],
	
	["Mirchi - Fiji", "radio", "img/radio-nasha.jpg","https://peridot.streamguys1.com:7150/Mirchi"],
	
	["Mirchi - Fiji 2", "radio mp3", "img/radio-nasha.jpg","https://peridot.streamguys1.com:7150/RFTwo"],

	["Australian Hindi", "radio", "img/radio-nasha.jpg","https://node-33.zeno.fm/bapme73qn7zuv?rj-ttl=5&rj-tok=AAABc6y-wX4A7iTCPJDR6o-nZg"],

	["Mastana - Australia", "radio mp3", "img/radio-nasha.jpg","https://cors.bitwize.com.lb/http://radiomastanaaustralia.serverroom.net:9170/;"],
		
	["Radio 360 - Australia", "radio mp3", "img/radio-nasha.jpg","https://cors.bitwize.com.lb/http://radio360aust.ddns.net:88/broadwave.mp3"],

	["Brisvaani - Australia", "radio mp3", "img/radio-nasha.jpg","https://ssl.aloncast.com:1513/;"],
	
	["Indian Link - Australia", "radio", "img/radio-nasha.jpg","https://indianlink.radioca.st/streams/128kbps"],

	
]



var srctype = "application/x-mpegURL";
var chnumb = "0";

	//alert(getchnl[2][0]); 
	//alert( "Total Channel count: " + getchnl.length); 
	
	let chTitle = "";
	getchnl.forEach(newMenu);

	function newMenu(item, index) {
	  chTitle += "<li data-chnum="+ index +"  class='mychnl "+ item[1] +" '>" + item[0] + "</li>"; 
	}

	document.getElementById("menu").innerHTML = chTitle;

	
	var clickedLI = document.getElementById("menu");
	var vidobj = document.getElementById('myvideo');
	

		
	let browserMemory = localStorage.getItem('oldChannel5');
	if (browserMemory == null) { chnumb }
	else { 
			chnumb = browserMemory;
			var oldchnl = clickedLI.querySelector('[data-chNum="'+ chnumb +'"]');
			oldchnl.classList.add("active");
		}



navMidscroll();

		
	var myLi = document.querySelectorAll('li');	
	myLi.forEach(item => {
		item.addEventListener('click', function(n) {

		removeActive();
		removeHtml5Video();
		removeiframeVideo();


		var chnumb = n.target.getAttribute('data-chNum');
		n.target.classList.add("active");
		navMidscroll();
		localStorage.setItem('oldChannel5', chnumb);
		sourceFormat(chnumb);
		
		})

	})


function navMidscroll(){
	// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
	// Scroll to specific values
	// window.scrollTo or
	window.scroll({
	  top: 1000, 
	  left: 0, 
	  behavior: 'smooth'
	});

	// Scroll certain amounts from current position 
	window.scrollBy({ 
	  top: 250, // could be negative value
	  left: 0, 
	  behavior: 'smooth' 
	});

	
	document.querySelector('.active').scrollIntoView({block:'center',behavior: 'smooth'});
	//let el = document.querySelector('.active');
	//el.scrollIntoView(true);
	//el.scrollIntoView({block:'center'});
	}
	
	
		
function sourceFormat(chnumb,srctype){

	if(getchnl[chnumb][3].indexOf('youtube') !== -1) {  
			  iframeVideo(chnumb) } 
	
	else if (getchnl[chnumb][3].indexOf('.m3u8') !== -1) {  
			var srctype = "application/x-mpegURL";
			html5Video(chnumb,srctype); } 
	
	else  	{var srctype = "audio/mp3";
			html5Video(chnumb,srctype); } 
	
}

	
function html5Video(chnumb,srctype) {

	/*var bgimage = document.createElement('div');
		bgimage.setAttribute('id', 'bgImgZ');
		bgimage.setAttribute("style", "background-image:url('"+ getchnl[chnumb][2] +"')" );
		vidobj.appendChild(bgimage);	*/

	//var bgimage = document.getElementById()('div');
		//bgimage.setAttribute('id', 'bgImgZ');
		vidobj.setAttribute("style", "background-image:url('"+ getchnl[chnumb][2] +"')" );
		//vidobj.appendChild(bgimage);	
		
		
	var videlem = document.createElement('video');
		vidobj.appendChild(videlem);	
		
		videlem.setAttribute('id', 'vidZ');
		videlem.setAttribute('preload', 'auto');
		videlem.setAttribute('autoplay', 'true');
		videlem.setAttribute('loop', 'true');
		videlem.setAttribute('tabindex', '-1');
		videlem.setAttribute('playsinline', 'playsinline');
		videlem.setAttribute('playsinline', 'true');
		videlem.setAttribute('controls', 'true');
		videlem.setAttribute('muted', 'false');
		videlem.setAttribute('class', 'video-js video-bgimg vjs-fill vjs-fluid vjs-theme-fantasy vjs-theme-city vjs-theme-forest vjs-theme-sea');
		//videlem.setAttribute("title", getchnl[chnumb][0]);
		videlem.setAttribute("poster", getchnl[chnumb][2]);

		
	var vidsrc = document.createElement('source');
		videlem.appendChild(vidsrc);
		vidsrc.setAttribute("src", getchnl[chnumb][3]);
		//vidsrc.setAttribute('type', 'application/x-mpegURL');
		//vidsrc.setAttribute('type', 'audio/mp3');
		vidsrc.setAttribute('type', srctype);
		

	var player = videojs(videlem, { 
									liveui:true,
									//liveTracker:true, 
									muted:false, 
									errorDisplay:false,
									loadingSpinner: true,
									bigPlayButton: true,
									//"fluid": true,
									fill: true,
									responsive: true,
									//width: "auto",
									//height: "auto",
									//controlBar: false,
									//playToggle: true,
									//captionsButton: true,
									//chaptersButton: true,            
									//subtitlesButton: true,
									//remainingTimeDisplay: true,
									//progressControl: {seekBar: true},
									//fullscreenToggle: true,
									//playbackRateMenuButton: true
								}); 
	player.fill(true);
	player.play();

	/*
   player.overlay({
    content: '<strong>My Channels List</strong>',
    overlays: [{
      align: "top",
      content: 'This event-triggered overlay message appears when the video is playing',
      start: 'play',
      end: 'pause'
    }]});	
	*/
	
	
}


function iframeVideo(chnumb){

	var iframelem = document.createElement('iframe');
		vidobj.appendChild(iframelem);	
		iframelem.setAttribute('id', 'vidZ');
		iframelem.setAttribute('frameborder', '0');
		iframelem.setAttribute('width', '100%');
		iframelem.setAttribute('height', '100%');
		iframelem.setAttribute('allowfullscreen', '0');
		iframelem.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
		vidobj.setAttribute("style", "background-image:url('"+ getchnl[chnumb][2] +"')" );
		iframelem.setAttribute("src", getchnl[chnumb][3]);
}


document.onkeydown = function(event) {
    switch (event.keyCode) {       
       case 32:
            event.preventDefault();
			var video = document.getElementById("vidZ_html5_api");
			if (video.paused) video.play();
			else video.pause();
			break;
    }
};


function removeHtml5Video() {

	if ( vidobj.getElementsByTagName('video').length > 0) {
		var videoElement = document.getElementById('vidZ_html5_api');
		videoElement.pause();
		videoElement.removeAttribute('src');
		videoElement.load();
		vidobj.innerHTML = '';
		videoElement.remove();
	}
}

function removeiframeVideo() {

	if ( vidobj.getElementsByTagName('iframe').length > 0) {
		var videoElement = document.getElementById('vidZ');
		vidobj.innerHTML = '';
		videoElement.remove();
	}
}

function removeActive() {
	var childrens = document.querySelectorAll("LI");
	childrens.forEach(function(elem) {
	  elem.classList.remove("active");
	});
}

sourceFormat(chnumb);

