const songs = [
  ["Energy", "Alan Walker", "https://www.youtube.com/watch?v=3hU06K9IXTo&ab_channel=AlanWalker", "https://i.ytimg.com/vi/3hU06K9IXTo/maxresdefault.jpg"],
  ["Hope", "Alan Walker", "https://www.youtube.com/watch?v=JhCEXRgbc_M&ab_channel=AlanWalker", "https://i1.sndcdn.com/artworks-000193910797-97ifos-t500x500.jpg"],
  ["135", "Alan Walker", "https://www.youtube.com/watch?v=mlaxs1Ur-NU&ab_channel=AlanWalker", "https://i.ytimg.com/vi/mlaxs1Ur-NU/maxresdefault.jpg"],
  ["*The Spectre", "Alan Walker", "https://www.youtube.com/watch?v=wJnBTPUQS5A&ab_channel=AlanWalker", "https://upload.wikimedia.org/wikipedia/en/c/c3/Alan_Walker_The_Spectre.jpg"],
  ["Force", "Alan Walker", "https://www.youtube.com/watch?v=lqYQXIt4SpA&ab_channel=AlanWalker", "https://i.ytimg.com/vi/lqYQXIt4SpA/maxresdefault.jpg"],
  ["Faded", "Alan Walker", "https://www.youtube.com/watch?v=60ItHLz5WEA&ab_channel=AlanWalker", "https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png"],
  ["Alone", "Alan Walker", "https://www.youtube.com/watch?v=1-xGerv5FOk&ab_channel=AlanWalker", "https://upload.wikimedia.org/wikipedia/en/b/ba/Alan_Walker_-_Alone.png"],
  ["Sing Me To Sleep", "Alan Walker", "https://www.youtube.com/watch?v=2i2khp_npdE&ab_channel=AlanWalker", "https://upload.wikimedia.org/wikipedia/en/d/d7/Alan_Walker_-_Sing_Me_to_Sleep.png"],
  ["*Unity", "Alan Walker", "https://www.youtube.com/watch?v=E3x_dLVTEuA", "https://i1.sndcdn.com/artworks-000643824694-oe1hln-t500x500.jpg"],
  ["On My Way", "Alan Walker", "https://www.youtube.com/watch?v=dhYOPzcsbGM", "https://upload.wikimedia.org/wikipedia/en/a/af/Alan_Walker_-_On_My_Way.png"],
  ["*Avem", "Alan Walker", "https://www.youtube.com/watch?v=TtMTGL2G-Ck", "https://i1.sndcdn.com/artworks-000633771997-h95h3x-t500x500.jpg"],
  ["Alone Pt II", "Alan Walker", "https://www.youtube.com/watch?v=HhjHYkPQ8F0", "https://upload.wikimedia.org/wikipedia/en/2/22/Alan_Walker_and_Ava_Max_-_Alone%2C_Pt._II.png"],
  ["*Routine", "Alan Walker", "https://www.youtube.com/watch?v=Mw9U7FPaZho", "https://static.qobuz.com/images/covers/25/71/0886446297125_600.jpg"],
  ["Play", "Alan Walker", "https://www.youtube.com/watch?v=YQRHrco73g4", "https://upload.wikimedia.org/wikipedia/en/4/45/Alan_Walker_Play.jpg"],
  ["Different World", "Alan Walker", "https://www.youtube.com/watch?v=m-PJmmvyP10", "https://upload.wikimedia.org/wikipedia/en/a/a8/Alan_Walker_%E2%80%93_Different_World.png"],
  ["Ignite", "K-391", "https://www.youtube.com/watch?v=Az-mGR-CehY", "https://upload.wikimedia.org/wikipedia/en/2/21/K-391_-_Ignite.png"],
  ["*Summertime", "K-391", "https://www.youtube.com/watch?v=25N1pdzvp4c", "https://i1.sndcdn.com/artworks-000090128062-tdjnff-t500x500.jpg"],
  ["Blank", "Disfigure", "https://www.youtube.com/watch?v=p7ZsBPK656s", "https://linkstorage.linkfire.com/medialinks/images/12a77b12-0fe6-45de-b710-48e90ffa698e/artwork-440x440.jpg"],
  ["Future World", "Amadeus", "https://www.youtube.com/watch?v=McwyQjM4vss", "https://i.ytimg.com/vi/McwyQjM4vss/maxresdefault.jpg"],
  ["*Rise", "Ampyx", "https://www.youtube.com/watch?v=8h-fqAnIn0A", "https://i.ytimg.com/vi/7B0zO4egzuA/maxresdefault.jpg"],
  ["Pacific Paradise", "Ampyx", "https://www.youtube.com/watch?v=8yiA3LKULHo", "https://i1.sndcdn.com/artworks-000183815293-nubg35-t500x500.jpg"],
  ["Holo", "Ampyx", "https://www.youtube.com/watch?v=Iv5P21D76bw", "https://i.ytimg.com/vi/Iv5P21D76bw/maxresdefault.jpg"],
  ["Embed", "Ampyx", "https://www.youtube.com/watch?v=JBzOSXA5QlQ", "https://i1.sndcdn.com/artworks-000284434706-gzxa3m-t500x500.jpg"],
  ["me and the boys", "Party In Backyard", "https://www.youtube.com/watch?v=ulbGlbqWykM", "https://m.media-amazon.com/images/I/51MolUi4StL._UXNaN_FMjpg_QL85_.jpg"],
  ["Invincible", "DEAF KEV", "https://www.youtube.com/watch?v=J2X5mJ3HDYE", "https://i1.sndcdn.com/artworks-000116771545-kc8oi5-t500x500.jpg"],
  ["*Ibiza", "Elektronomia", "https://www.youtube.com/watch?v=ru4Ttt22cuQ", "https://f4.bcbits.com/img/a1279128017_10.jpg"],
  ["*Summersong 2018", "Elektronomia", "https://www.youtube.com/watch?v=HoCw_gaCHXE", "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/501/1000x0/summersong-2018-1586954973-1LoVrsQP5K.jpg"],
  ["Flares", "NIVIRO", "https://www.youtube.com/watch?v=V-mP3VU0DCg", "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/90/db/b1/90dbb12e-c63a-ad2c-21b8-1fb85033f8c7/cover.jpg/1200x1200bb.jpg"],
  ["Summersong 2020", "Elektronomia", "https://www.youtube.com/watch?v=8o_qXjkLCns", "https://i.ytimg.com/vi/8o_qXjkLCns/maxresdefault.jpg"],
  ["Summersong 2019", "Elektronomia", "https://www.youtube.com/watch?v=7DBKaLdKPOM", "https://i.ytimg.com/vi/HB9F3ndMtjA/maxresdefault.jpg"],
  ["*Summer Vibes", "Elektronomia", "https://www.youtube.com/watch?v=gPmjeUHI3cs", "https://i.ytimg.com/vi/gPmjeUHI3cs/maxresdefault.jpg"],
  ["Breeze", "Elektronomia", "https://www.youtube.com/watch?v=abYP-NPLTbw", "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/794/1000x0/breeze-1597410031-m68lX0WcL3.jpg"],
  ["Shine On", "Elektronomia", "https://www.youtube.com/watch?v=VdSOu2IXa68", "https://i1.sndcdn.com/artworks-000415896156-pbd2uh-t500x500.jpg"],
  ["*Candyland", "Tobu", "https://www.youtube.com/watch?v=IhchfhxvPKI&ab_channel=Tobu", "https://c-cl.cdn.smule.com/rs-s79/arr/1a/fa/069dfa94-a5ef-4f2d-99a0-96c4a334fb58.jpg"],
  ["*Candlyland Pt II", "Tobu", "https://www.youtube.com/watch?v=6v7pWE0EepY&ab_channel=Tobu", "https://i.ytimg.com/vi/6v7pWE0EepY/maxresdefault.jpg"],
  ["Sunburst", "Tobu", "https://www.youtube.com/watch?v=1-0-4HqyvXE", "https://i1.sndcdn.com/artworks-000077736952-t8fgnn-t500x500.jpg"],
  ["Panda", "Itro", "https://www.youtube.com/watch?v=FkKjZz2vpy4", "https://i1.sndcdn.com/artworks-000096612400-q5qy0f-t500x500.jpg"],
  ["Electro House", "K-391", "https://www.youtube.com/watch?v=ULo95Mm_s20", "https://i.scdn.co/image/ab67616d0000b273bdd8d7289d0247d3a26f03c2"],
  ["Still", "K-391", "https://www.youtube.com/watch?v=JTwFq3vZoXw", "https://i.ytimg.com/vi/JTwFq3vZoXw/maxresdefault.jpg"],
  ["Free Fall", "Audioscribe", "https://www.youtube.com/watch?v=8ciZGNmlWgo", "https://i.ytimg.com/vi/8ciZGNmlWgo/maxresdefault.jpg"],
  ["New World", "KIRA", "https://www.youtube.com/watch?v=6nCSYh8vwv0", "https://i1.sndcdn.com/artworks-000501425607-dj0rel-t500x500.jpg"],
  ["Last Summer", "Ikson", "https://www.youtube.com/watch?v=3GyQlZpUimQ", "https://i1.sndcdn.com/artworks-DlyruLctBR8Q-0-t500x500.jpg"],
  ["New Day", "Ikson", "https://www.youtube.com/watch?v=QMOadtGpwlw", "https://i1.sndcdn.com/artworks-000224695820-vzhj4h-t500x500.jpg"],
  ["All Night", "Ikson", "https://www.youtube.com/watch?v=ZBA7ZWy0reg", "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9a/d1/f0/9ad1f078-b15e-c792-34ef-636a08338664/2F1FF255-1286-4C4F-9070-91187C28DED6.png/600x600bf-60.jpg"],
  ["Rogue", "Jim Yosef", "https://www.youtube.com/watch?v=3uairflAcvE", "https://i.ytimg.com/vi/3uairflAcvE/maxresdefault.jpg"],
  ["The Other Side", "Elektronomia", "https://www.youtube.com/watch?v=odThebFOFVg", "https://i.ytimg.com/vi/hROB3qde5Wk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWyhGMA8=&rs=AOn4CLAGwx_v_HuHnYT1wKVqYMZPj2Af4g"],
  ["Wash Your Hands", "OMFG", "https://www.youtube.com/watch?v=my39FFM3qg4", "https://i.ytimg.com/vi/my39FFM3qg4/maxresdefault.jpg"],
  ["*Hello", "OMFG", "https://www.youtube.com/watch?v=ih2xubMaZWI", "https://i1.sndcdn.com/artworks-sTswE36Gy8x3S27o-WVRHvA-t500x500.jpg"],
  ["Stronger", "TheFatRat", "https://www.youtube.com/watch?v=gHgv19ip-0c", "https://i.ytimg.com/vi/aUgOSUT1IsE/maxresdefault.jpg"],
  ["Wonderful", "OMFG", "https://www.youtube.com/watch?v=lYqSHHlilt8", "https://i1.sndcdn.com/artworks-000167752807-645tp4-t500x500.jpg"],
  ["Cetus", "Lensko", "https://www.youtube.com/watch?v=i3vrV-WNmsc", "https://i1.sndcdn.com/artworks-000087982004-tw6dmw-t500x500.jpg"],
  ["The Aviator", "Ampyx", "https://www.youtube.com/watch?v=aYsTRmm-ayg", "https://i.ytimg.com/vi/aYsTRmm-ayg/maxresdefault.jpg"],
  ["The Fall", "Ampyx", "https://www.youtube.com/watch?v=YzF5CCczUiI", "https://i.ytimg.com/vi/YzF5CCczUiI/maxresdefault.jpg"],
  ["LMAO", "Ampyx", "https://www.youtube.com/watch?v=Wlsd7ZesiMs", "https://is1-ssl.mzstatic.com/image/thumb/Music18/v4/b6/a1/24/b6a124b4-2c18-9373-c166-4bcca01625e7/859717902660_cover.jpg/600x600bf-60.jpg"],
  ["Tevo", "Vexento", "https://www.youtube.com/watch?v=cOoGIy4C5eY", "https://i.ytimg.com/vi/cOoGIy4C5eY/maxresdefault.jpg"],
  ["*Masked Heroes", "Vexento", "https://www.youtube.com/watch?v=ZLhfr8mpzxU", "https://i.ytimg.com/vi/ZLhfr8mpzxU/maxresdefault.jpg"],
  ["*Return Of The Raver", "Vexento", "https://www.youtube.com/watch?v=zUNZLlt39ZA", "https://i.ytimg.com/vi/zUNZLlt39ZA/maxresdefault.jpg"],
  ["Paradise", "Ikson", "https://www.youtube.com/watch?v=TiQ7aug-GwI", "https://i1.sndcdn.com/artworks-Dg11jMLhMUNg-0-t500x500.jpg"],
  ["Return Of The Heroes", "Vexento", "https://www.youtube.com/watch?v=BNwwjFD9Wsw", "https://i.ytimg.com/vi/BNwwjFD9Wsw/maxresdefault.jpg"],
  ["Pollen", "Vexento", "https://www.youtube.com/watch?v=e8yu_k-JBvE", "https://i.ytimg.com/vi/e8yu_k-JBvE/maxresdefault.jpg"],
  ["Glow", "Vexento", "https://www.youtube.com/watch?app=desktop&v=iHaEVhwxdZM&ab_channel=Vexento", "https://i.ytimg.com/vi/iHaEVhwxdZM/maxresdefault.jpg"],
  ["Another Life", "Vexento", "https://www.youtube.com/watch?v=oAvcQsuIARw", "https://i.ytimg.com/vi/oAvcQsuIARw/maxresdefault.jpg"],
  ["We Are One", "Vexento", "https://www.youtube.com/watch?v=2N4t_kChuiU", "https://i.ytimg.com/vi/2N4t_kChuiU/maxresdefault.jpg"],
  ["*Spark", "Vexento", "https://www.youtube.com/watch?v=p3fh3HgVB6E", "https://i1.sndcdn.com/artworks-000335872548-5rgukl-t500x500.jpg"],
  ["*Masked Raver", "Vexento", "https://www.youtube.com/watch?v=Nvc0hgt9I1g", "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/270/1000x0/masked-raver-1586948338-ftaTwov9dj.jpg"],
  ["rewind time", "Party In Backyard", "https://www.youtube.com/watch?v=-XsYMHm64wM", "https://i1.sndcdn.com/artworks-000464153835-7txb38-t500x500.jpg"],
  ["Circles", "Lensko", "https://www.youtube.com/watch?v=ztvIhqVtrrw", "https://i1.sndcdn.com/artworks-000092107228-vfimi5-t500x500.jpg"],
  ["Different Heaven", "Nekozilla", "https://www.youtube.com/watch?v=6FNHe3kf8_s", "https://i1.sndcdn.com/artworks-000194500417-9v4vbx-t500x500.jpg"],
  ["La La", "Elijah N", "https://www.youtube.com/watch?v=xhGcSwWAT3c", "https://i.ytimg.com/vi/xhGcSwWAT3c/maxresdefault.jpg"],
  ["River Flows In You", "Yiruma", "https://www.youtube.com/watch?v=7maJOI3QMu0", "https://i.ytimg.com/vi/7maJOI3QMu0/maxresdefault.jpg"],
  ["Kiss The Rain", "Yiruma", "https://www.youtube.com/watch?v=so6ExplQlaY", "https://i1.sndcdn.com/artworks-000061356184-s1i5l7-t500x500.jpg"],
  ["May Be", "Yiruma", "https://www.youtube.com/watch?v=PeU3LS_s03I", "https://i.ytimg.com/vi/6Wg_JpVHkio/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCEgZShcMA8=&rs=AOn4CLBJs9vOyohJEP0waWWDjjEeE43pMw"],
  ["A Thousand Years", "Christina Perri", "https://www.youtube.com/watch?v=rtOvBOTyX00&ab_channel=ChristinaPerri", "https://upload.wikimedia.org/wikipedia/en/8/8f/AThousand_Years.jpg"],
  ["Emotion", "Pokemon", "https://www.youtube.com/watch?v=WxPOSrrWjJY", "https://i.ytimg.com/vi/WxPOSrrWjJY/maxresdefault.jpg"],
  ["Floating With You", "Vexento", "https://www.youtube.com/watch?v=aNSn3RW0xmI", "https://i.ytimg.com/vi/aNSn3RW0xmI/maxresdefault.jpg"],
  ["Flashback", "Vexento", "https://www.youtube.com/watch?v=W5Uq5I7gI80", "https://i1.sndcdn.com/artworks-KEhL8YKRigD2KPKg-BjwaFg-t500x500.jpg"],
  ["*Nova", "Ahrix", "https://www.youtube.com/watch?v=X5mcY8ecs8I", "https://i1.sndcdn.com/avatars-000242026876-v36423-t500x500.jpg"],
  ["Pixel Party", "Vexento", "https://www.youtube.com/watch?v=xSaLtRksFlM", "https://i.ytimg.com/vi/xSaLtRksFlM/maxresdefault.jpg"],
  ["Wild", "Vexento", "https://www.youtube.com/watch?v=PLrVdrW4DIs", "https://i1.sndcdn.com/artworks-UhS0DIpegVedsdHk-kotJ2g-t500x500.jpg"],
  ["Wonderful Day", "Vermair", "https://www.youtube.com/watch?v=lrJuhj5EqiU", "https://i1.sndcdn.com/artworks-000559587228-64ew83-t500x500.jpg"],
  ["Lotus", "Vexento", "https://www.youtube.com/watch?v=b7nlAsHoOxo", "https://i1.sndcdn.com/artworks-EnXyvkzicmesytim-1aEH2A-t500x500.jpg"],
  ["Jump", "Vexento", "https://www.youtube.com/watch?v=jODRcFq1bfI", "https://i1.sndcdn.com/artworks-000475234548-t10vc8-t500x500.jpg"],
  ["PARTY", "Tokyo Machine", "https://www.youtube.com/watch?v=rpkDl6UN4a8", "https://i1.sndcdn.com/artworks-000172812598-3ew0oe-t500x500.jpg"],
  ["SPOOKY", "Tokyo Machine", "https://www.youtube.com/watch?v=qZcR_afc1Mw", "https://i1.sndcdn.com/artworks-000249502683-ik00la-t500x500.jpg"],
  ["Take It Off", "Ke$sha", "https://www.youtube.com/watch?v=edP0L6LQzZE", "https://upload.wikimedia.org/wikipedia/en/8/81/Keshatakeitoff200.jpg"],
  ["Viva La Vida", "Coldplay", "https://www.youtube.com/watch?v=dvgZkm1xWPE", "https://upload.wikimedia.org/wikipedia/en/b/b2/Coldplay_-_Viva_la_Vida_or_Death_and_All_His_Friends.png"],
  ["Victory", "Two Steps From Hell", "https://www.youtube.com/watch?v=hKRUPYrAQoE", "https://i.ytimg.com/vi/hKRUPYrAQoE/maxresdefault.jpg"],
  ["Star Sky", "Two Steps From Hell", "https://www.youtube.com/watch?v=pICAha0nsb0", "https://i.ytimg.com/vi/hKRUPYrAQoE/maxresdefault.jpg"],
  ["So Say We All", "Audiomachine", "https://www.youtube.com/watch?v=8uGmE8fVzQ0", "https://i.ytimg.com/vi/8uGmE8fVzQ0/maxresdefault.jpg"],
  ["*N°025", "Relaxdaily", "https://www.youtube.com/watch?v=XXYpNOZtWSU", "https://i.ytimg.com/vi/RZrcaOnqu-E/maxresdefault.jpg"],
  ["Eurodancer", "Mangoo", "https://www.youtube.com/watch?v=03dJHrLdVl0", "https://i.ytimg.com/vi/1KBNVZfWsm0/sddefault.jpg"],
  ["Turn It Up", "Tobu", "https://www.youtube.com/watch?v=RrtAC7UZOh0", "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/608/1000x0/turn-it-up-1586957935-wvOGSMhyMe.jpg"],
  ["Infectious", "Tobu", "https://www.youtube.com/watch?v=qlinKNqHCyg", "https://i1.sndcdn.com/artworks-000083092667-ekwdwi-t500x500.jpg"],
  ["VIP Me", "Edward Everitt", "https://www.youtube.com/watch?v=uJ42j3FJwqc", "https://i.ytimg.com/vi/uJ42j3FJwqc/maxresdefault.jpg"],
  ["Memes", "NIVIRO", "https://www.youtube.com/watch?v=hgXZQfHySDw", "https://i1.sndcdn.com/artworks-000343734021-j4m63h-t500x500.jpg"],
  ["A Town With An Ocean View", "Joe Hisaishi", "https://www.youtube.com/watch?v=pR4iCWB-VVQ", "https://i1.sndcdn.com/artworks-000133541566-5t2in1-t500x500.jpg"],
  ["Liberators", "Epic Score", "https://www.youtube.com/watch?v=tjUpKDgM80k", "https://i.scdn.co/image/ab67616d0000b273091d5bfaa6aaf8e8051cc6f2"],
  ["Demise Of A Nation", "Sucession Studios", "https://www.youtube.com/watch?v=Oaz_OU_6YRw", "https://i1.sndcdn.com/artworks-rYkavKMuzkSWUyXG-2F3hEg-t500x500.jpg"],
  ["*Murder In My Mind", "Kordhell", "https://www.youtube.com/watch?v=w-sQRS-Lc9k", "https://i1.sndcdn.com/artworks-24UT7UzWHbeNAya7-4R911Q-t500x500.jpg"],
  ["Last Friday Night", "Katy Perry", "https://www.youtube.com/watch?v=KlyXNRrsk4A", "https://m.media-amazon.com/images/M/MV5BYzQ3YjkzNWItZDUxZi00OGNjLTlkOWQtNWY3Y2JhMmRlMWEzXkEyXkFqcGdeQXVyNzg4MTIxNzg@._V1_.jpg"],
  ["Die Young", "Ke$sha", "https://www.youtube.com/watch?v=NOubzHCUt48", "https://i.scdn.co/image/ab67616d0000b27376c5c62197115a22b23ff950"],
  ["Best Day Of My Life", "American Authors", "https://www.youtube.com/watch?v=Y66j_BUCBMY", "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/BestDayOfMyLifeAmericanAuthors.jpg/220px-BestDayOfMyLifeAmericanAuthors.jpg"],
  ["Bad Apple!!", "Masayoshi Minoshima", "https://www.youtube.com/watch?v=9lNZ_Rnr7Jc", "https://i.ytimg.com/vi/9lNZ_Rnr7Jc/maxresdefault.jpg"],
  ["Feel Good", "Syn Cole", "https://www.youtube.com/watch?v=q1ULJ92aldE", "https://i1.sndcdn.com/artworks-000148844797-j3itpn-t500x500.jpg"],
  ["The Nights", "Avicii", "https://www.youtube.com/watch?v=UtF6Jej8yb4", "https://upload.wikimedia.org/wikipedia/en/3/34/Avicii_Nights_Artwork.png"],
  ["Wake Me Up", "Avicii", "https://www.youtube.com/watch?v=IcrbM1l_BoI", "https://upload.wikimedia.org/wikipedia/en/d/da/Avicii_Wake_Me_Up_Official_Single_Cover.png"],
  ["Sparkle", "Radwimps", "https://www.youtube.com/watch?v=xX7xWEh6ujk", "https://i.ytimg.com/vi/-pHfPJGatgE/maxresdefault.jpg"],
  ["World's Smallest Violin", "AJR", "https://www.youtube.com/watch?v=PEnJbjBuxnw", "https://upload.wikimedia.org/wikipedia/en/3/30/World%E2%80%99s_Smallest_Violin.jpeg"],
  ["Magic", "Tobu", "https://www.youtube.com/watch?v=nCGW7ZckTdg", "https://i1.sndcdn.com/artworks-8W32oKUOzM9d5Owk-hxldBg-t500x500.jpg"],
  ["*Downtown", "Axero", "https://www.youtube.com/watch?v=PJx-y3unzGs", "https://i1.sndcdn.com/artworks-000081035299-lhfgd3-t500x500.jpg"],
  ["Hey Soul Sister", "Train", "https://www.youtube.com/watch?v=kVpv8-5XWOI", "https://upload.wikimedia.org/wikipedia/en/1/15/Hey_Soul_Sister.jpg"],
  ["Rather Be", "Clean Bandit", "https://www.youtube.com/watch?v=m-M1AtrxztU", "https://upload.wikimedia.org/wikipedia/en/2/2c/Rather_Be_single_cover.jpg"],
  ["Can't Hold Us", "Macklemore", "https://www.youtube.com/watch?v=2zNSgSzhBfM", "https://upload.wikimedia.org/wikipedia/en/6/61/Can%27t_Hold_Us.png"],
  ["Stereo Hearts", "Gym Class Heroes", "https://www.youtube.com/watch?v=T3E9Wjbq44E", "https://upload.wikimedia.org/wikipedia/en/1/17/Gym_Class_Heroes_-_Stereo_Hearts.jpg"],
  ["MISS ME?", "Kordhell", "https://www.youtube.com/watch?v=aYtOKQ9LYYQ", "https://i.scdn.co/image/ab67616d0000b273c33cd36125593abbd6a02b92"],
  ["S.X.N.D. N.X.D.E.S.", "GREEN ORXNGE", "https://www.youtube.com/watch?v=Co0pU_sUqKk", "https://i.ytimg.com/vi/Co0pU_sUqKk/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBUgcigRMA8=&rs=AOn4CLAct0vFuLa2R5n2KMeL_09rRE4Cgg"],
  ["POOR", "gqtis", "https://www.youtube.com/watch?v=tV-fEIVBmEw", "https://i1.sndcdn.com/artworks-6i7yLHVEHNCdOekK-f2FY4A-t500x500.jpg"],
  ["*Heart Attack", "Luxcious", "https://www.youtube.com/watch?v=pLa2yrk_guE", "https://i.ytimg.com/vi/4SialxxA3jk/maxresdefault.jpg"],
  ["*Freedom Dive", "xi", "https://www.youtube.com/watch?v=k-3y2LVF_SE&ab_channel=xi-Topic", "https://i.scdn.co/image/ab67616d0000b2736252116ae9c3f1dd7b103929"],
  ["Wellerman", "Nathan Evans", "https://www.youtube.com/watch?v=qP-7GNoDJ5c", "https://i.scdn.co/image/ab67616d0000b273db24f6590f4ad36048076521"],
  ["FUNK ESTRANHO", "ALXIKE", "https://www.youtube.com/watch?v=VncGDqIbNVQ", "https://m.media-amazon.com/images/I/41Nv2x7h3JL._UXNaN_FMjpg_QL85_.jpg"],
  ["L'AMOUR TOUJOURS", "GIGI D'AGOSTINO", "https://www.youtube.com/watch?v=w15oWDh02K4", "https://upload.wikimedia.org/wikipedia/en/f/f5/Gigi_Amour_single.jpg"],
  ["*i like the way you kiss me", "Artemas", "https://www.youtube.com/watch?v=evJ6gX1lp2o&list=LL&index=13", "https://upload.wikimedia.org/wikipedia/en/3/3e/Artemas_-_I_Like_the_Way_You_Kiss_Me.png"],
  ["*SLAY!", "Eternxlkz", "https://www.youtube.com/watch?v=qlzcHe_gusE", "https://i1.sndcdn.com/artworks-9hvowjgyyHy6JaON-7o79iQ-t1080x1080.jpg"],
  ["*ENOUGH!", "Eternxlkz", "https://www.youtube.com/watch?v=4W5ir4DOtoE", "https://i.scdn.co/image/ab67616d00001e02c80fe27586c2da910984cb9a"],
  ["*BRODYAGA FUNK", "Eternxlkz", "https://www.youtube.com/watch?v=szJn6ayPv-4", "https://i1.sndcdn.com/artworks-9hvowjgyyHy6JaON-7o79iQ-t1080x1080.jpg"],
  ["DRESS!", "Eternxlkz", "https://www.youtube.com/watch?v=HPcXv_A6QTU", "https://i1.sndcdn.com/artworks-qhGC4uOjqGxjTjHI-VtFjgQ-t500x500.jpg"],
  ["*Home", "Edward Sharpe & The Magnetic Zeros", "https://www.youtube.com/watch?v=A5rohNXvVSc", "https://i.scdn.co/image/ab67616d0000b273e0dd719897dd60694ce7593d"],
  ["*Riptide", "Vance Joy", "https://www.youtube.com/watch?v=lYoWuaw5nSk", "https://i1.sndcdn.com/artworks-f5rtrZp6dmab-0-t500x500.jpg"],
  ["Can't Hold Us", "Macklemore & Ryan Lewis", "https://www.youtube.com/watch?v=VG3JsmOmDqw", "https://upload.wikimedia.org/wikipedia/en/6/61/Can%27t_Hold_Us.png"],
  ["Counting Stars", "OneRepublic", "https://www.youtube.com/watch?v=hT_nvWreIhg", "https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb"],
  ["I Ain’t Worried", "OneRepublic", "https://www.youtube.com/watch?v=mNEUkkoUoIA", "https://upload.wikimedia.org/wikipedia/en/c/cf/I_Ain%27t_Worried_-_OneRepublic.jpg"],
  ["*WAKE UP!", "MoonDeity", "https://www.youtube.com/watch?v=tKvEnZSoqas&list=RDtKvEnZSoqas&start_radio=1", "https://i1.sndcdn.com/artworks-fv537Hu4dwbL62Gc-1NvWLA-t500x500.jpg"],
  ["*Ainsi Bas La Vida Funk", "DR MØB & ZODIVK", "https://www.youtube.com/watch?v=1FSnAMe5WXE&list=RDtKvEnZSoqas&index=2", "https://geo-media.beatport.com/image_size/1400x1400/2255a1f1-b968-4020-a883-175906e20933.jpg"],
  ["*SLAUGHTER HOUSE", "Phonkha x zecki", "https://www.youtube.com/watch?v=8zBp1jzHf3Y&list=RDtKvEnZSoqas&index=9", "https://i1.sndcdn.com/artworks-gZXLwfAdtu3lnByS-xSyNLw-t500x500.jpg"],
  ["*LAND OF FIRE", "KORDHELL", "https://www.youtube.com/watch?v=yahUpxNPK98&list=RDtKvEnZSoqas&index=28", "https://i.scdn.co/image/ab67616d0000b273c2c8cfd3f522e17789b17686"],
  ["The Motto", "Tiesto & Ava Max", "https://www.youtube.com/watch?v=rbJjpU6BEps", "https://upload.wikimedia.org/wikipedia/en/6/63/Ti%C3%ABsto_-_The_Motto.jpg"],
  ["Bumble Bee", "Bambee", "https://www.youtube.com/watch?v=UlwfDIf8e3Q", "https://i.scdn.co/image/ab67616d0000b27323ae0821a4c7e30bec64afbf"],
  ["Jerk It Out", "Caesars Palace", "https://www.youtube.com/watch?v=w869Avr_fXI", "https://upload.wikimedia.org/wikipedia/en/7/7c/Jerk_It_Out_-_The_Caesars.jpg"],
  ["*2 PHÚT HƠN FUNK", "KhangMxne and MGD", "https://www.youtube.com/watch?v=bnuRGXYitJI", "https://i.scdn.co/image/ab67616d0000b273632d3c4e53569cf7f0847f11"],
  ["*PUNK or FUNK", "DR MØB", "https://www.youtube.com/watch?v=Ofo4aDjuDPI", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a7/ea/15/a7ea15e2-3078-0788-3d75-4be02d9943b5/artwork.jpg/600x600bf-60.jpg"],
  ["*Sofia", "Alvaro Soler", "https://www.youtube.com/watch?v=qaZ0oAh4evU", "https://upload.wikimedia.org/wikipedia/en/d/d3/Sofia-song-by-Alvaro-Soler.jpg"],
  ["Freaks", "Timmy Trumpet & Savage", "https://www.youtube.com/watch?v=r1dquH_KOQc", "https://i.scdn.co/image/ab67616d0000b27383c104a7444e5bcf01b3d8b1"],
  ["*What Makes You Beautiful", "One Direction", "https://www.youtube.com/watch?v=QJO3ROT-A4E", "https://i1.sndcdn.com/artworks-000218054713-2hngbp-t500x500.jpg"],
  ["FUNK DO BOUNCE", "Ariis", "https://www.youtube.com/watch?v=mjsJzKry6E0", "https://i.scdn.co/image/ab67616d0000b2737e37f6e5b613003d4c185672"],
  ["We Fell Apart", "Anguish", "https://www.youtube.com/watch?v=5DbE23UoVSw", "https://i.scdn.co/image/ab67616d0000b2737a1d8ccf08127d4afada246d"],
  ["Just Dance", "Lady Gaga", "https://www.youtube.com/watch?v=2Abk1jAONjw", "https://upload.wikimedia.org/wikipedia/en/7/77/Just_Dance_cover.png"],
  ["*Stolen Dance", "Milky Chance", "https://www.youtube.com/watch?v=iX-QaNzd-0Y", "https://i.scdn.co/image/ab67616d0000b273b5d4730e54f84c66c70fe60a"],
  ["Judas", "Lady Gaga", "https://www.youtube.com/watch?v=wagn8Wrmzuc", "https://upload.wikimedia.org/wikipedia/en/9/9f/Lady_Gaga_-_Judas_%28single%29.png"],
  ["Give Me Everything", "Pitbull", "https://www.youtube.com/watch?v=EPo5wWmKEaI", "https://upload.wikimedia.org/wikipedia/en/0/06/Pitbull_-_Give_Me_Everything.jpg"],
  ["Angel With A Shotgun", "The Cab", "https://www.youtube.com/watch?v=Oxd6pXSYkzE", "https://i.scdn.co/image/ab67616d0000b27351b73e24fb27b3c68159bcb3"],
  ["Duel of the Fates", "John Williams", "https://www.youtube.com/watch?v=D_2bluVPsb0", "https://pyxis.nymag.com/v1/imgs/d7e/015/f8c6b04e233619fd41cc8e496f3846b33b-13-phantom-menace-fight.rsquare.w400.jpg"],
  ["Battle of the Heroes", "John Williams", "https://www.youtube.com/watch?v=FHuD5y-PZM0", "https://static.wikia.nocookie.net/duels/images/4/43/B1F3776B-F783-4A46-901F-B23FF1A7CF26.jpg/revision/latest?cb=20210224161454"],
  ["To You", "Shin Hae Chul", "https://www.youtube.com/watch?v=5dHcVjj_Kq0&list=RD5dHcVjj_Kq0&start_radio=1", "https://i.scdn.co/image/ab67616d0000b2739c1c1df040b37e1a330ec184"],
  ["*Paint It, Black", "Rolling Stones", "https://www.youtube.com/watch?v=EBUFtoC2oj4&list=RDEBUFtoC2oj4&start_radio=1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsZyBjDh0vKJ3vRO95xCjtZ-dDa9_P5-cfQ&s"],
  ["Fortunate Son", "Creedence Clearwater Revival", "https://www.youtube.com/watch?v=3RmQTYLD398&list=RD3RmQTYLD398&start_radio=1", "https://www.udiscovermusic.com/wp-content/uploads/2020/11/Creedence-Fortunate-Son-820x820.jpg"],
  ["*On Thing", "One Direction", "https://www.youtube.com/watch?v=Y1xs_xPb46M&list=RDY1xs_xPb46M&start_radio=1", "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/One_Direction_-_One_Thing_Cover.jpg/250px-One_Direction_-_One_Thing_Cover.jpg"],
  ["*Live While We're Young", "One Direction", "https://www.youtube.com/watch?v=AbPED9bisSc&list=RDAbPED9bisSc&start_radio=1", "https://upload.wikimedia.org/wikipedia/en/3/3d/One_Direction_%E2%80%93_Live_While_We%27re_Young.jpg"],
  ["*Best Song Ever", "One Direction", "https://www.youtube.com/watch?v=-zCF1-emakY&list=RD-zCF1-emakY&start_radio=1", "https://upload.wikimedia.org/wikipedia/en/f/fa/Best_Song_Ever_by_One_Direction.png"],
  ["Steal My Girl", "One Direction", "https://www.youtube.com/watch?v=sahsquWlw5I&list=RDsahsquWlw5I&start_radio=1", "https://upload.wikimedia.org/wikipedia/en/2/26/One_Direction_-_Steal_My_Girl.png"],
  ["H*ow Do You Do", "Boom", "https://www.youtube.com/watch?v=ScpYYPzyRu8&list=RDScpYYPzyRu8&start_radio=1", "https://i.scdn.co/image/ab67616d0000b2734142d75b2090697d0f3d9738"],
  ["Government Hooker", "Lady Gaga", "https://www.youtube.com/watch?v=o8uMXyxvbKA", "https://i1.sndcdn.com/artworks-000020003377-nmtvzj-t500x500.jpg"],
  ["Kickstart My Heart", "Mötley Crüe", "https://www.youtube.com/watch?v=e17mr5ZtWPI&list=RDe17mr5ZtWPI&start_radio=1", "https://upload.wikimedia.org/wikipedia/en/a/ae/Kickstart_my_heart.jpg"],
  ["HandClap", "Fitz and the Tantrums", "https://www.youtube.com/watch?v=tbyWV7ccaeY&list=RDtbyWV7ccaeY&start_radio=1", "https://upload.wikimedia.org/wikipedia/en/d/de/HandClap_%28Remixes%2C_Pt._1%29_cover.jpg"],
  ["Feel This Moment", "Pitbull", "https://www.youtube.com/watch?v=5jlI4uzZGjU", "https://upload.wikimedia.org/wikipedia/en/f/fe/Feel-This-Moment-Official-Single-Cover.jpg"],
  ["*Szenbonzakura", "Kurousa-P", "https://www.youtube.com/watch?v=Mqps4anhz0Q&list=RDMqps4anhz0Q&start_radio=1", "https://upload.wikimedia.org/wikipedia/en/6/6e/Senbonzakura.png"],
  ["*I'm Just a Kid", "Simple Plan", "https://www.youtube.com/watch?v=_GOR5gvQwDI", "https://upload.wikimedia.org/wikipedia/en/e/e9/I%27mjustakid.jpeg"],
  ["Are You Satisfied", "Marina & The Diamonds", "https://www.youtube.com/watch?v=VHi1kGbWo9Q", "https://i.scdn.co/image/ab67616d0000b2735e586c9004ed2100d5a20427"],
  ["Choose Your Fighter", "Ava Max", "https://www.youtube.com/watch?v=PzNLMmAOlEU", "https://upload.wikimedia.org/wikipedia/en/0/0a/Ava_Max_-_Choose_Your_Fighter.png"],
  ["Fragment", "slxughter", "https://www.youtube.com/watch?v=rngLO3tF2mA&list=LL&index=9", "https://i1.sndcdn.com/artworks-fyxokc9yZzlkXBdT-8h6nZA-t500x500.png"],
  ["Another Love", "Tom Odell", "https://www.youtube.com/watch?v=YRkWZO4iLYk&list=LL&index=17", "https://i.scdn.co/image/ab67616d0000b2731917a0f3f4152622a040913f"],
  ["アブノーマリティ･ダンシンガール / ぐちり", "Guchiry", "https://www.youtube.com/watch?v=SDt2OOdWR-Y", "https://i.ytimg.com/vi/SDt2OOdWR-Y/maxresdefault.jpg"],
  ["*Hungry", "Rob Bailey & The Hustle Standard", "https://www.youtube.com/watch?v=eqjtavYIzg0&list=LL&index=21", "https://i.scdn.co/image/ab67616d0000b2730029db0c10db0809d7913edb"],
  ["It's Gonan Be Me", "NSYNC", "https://www.youtube.com/watch?v=Awd2qKNM7FI&list=LL&index=24", "https://upload.wikimedia.org/wikipedia/en/f/f2/ItsGonnaBeMe.jpg"],
  ["*Bye Bye Bye", "NSYNC", "https://www.youtube.com/watch?v=2ydCvkxuNm4&list=LL&index=29", "https://upload.wikimedia.org/wikipedia/en/a/aa/Byebyebye.jpg"],
  ["*PSL", "2KE", "https://www.youtube.com/watch?v=KzDqIaT21po&list=LL&index=33", "https://i1.sndcdn.com/artworks-WMXMnwVOxvm8uT0c-LvtZBQ-t500x500.png"]
]

function toggleSort() {
  const e = document.querySelector("#sortItems")
  if (e.style.width == "") {
    e.style.width = "100%"
  } else {
    e.style.width = ""
  }
}

function setSelection(i) {
  document.getElementsByClassName("selected")[0].classList.remove("selected")
  document.querySelector("#sortItems").children[i].classList.add("selected")
  filterSelection(i)
}

function filterSelection(i) {
  const parent = document.querySelector("#musicContainer")
  const results = document.querySelector("#results")
  if (i == 0) {
    // filter by all
    parent.innerHTML = ""
    allSongs.forEach(function(e) {parent.append(e)})
    results.innerHTML = allSongs.length
  } else if (i == 1) {
    // filter by favorites
    parent.innerHTML = ""
    let i = 0
    allSongs.forEach(function(e) {
      if (e.children[0].children.length == 3) {
        parent.append(e)
        i ++ 
      }
    })
    results.innerHTML = i
  } else if (i == 2) {
    // filter by author
    parent.innerHTML = ""
    let authors = {}
    allSongs.forEach(function(e) {
      let name = e.getElementsByClassName("song-artist")[0].innerHTML
      if (name in authors) {
        authors[name].push(e)
      } else {
        authors[name] = [e]
      }
    })

    for (const [_, author] of Object.entries(authors)) {
      let i = 0
      author.forEach(function(e) {
        parent.append(e)
        i ++
      })
      
      for (let _=0; _<5-(i%5); _++) {
        let b = document.createElement("div")
        b.className = "break"
        parent.append(b)
      }
    }

    results.innerHTML = allSongs.length
  } 
}

function createSongElement(e) {
  const songElementItem = document.createElement("div")
  const songElement = document.createElement("div")
  const songIcon = document.createElement("img")
  const songDetails = document.createElement("div")
  const songTitle = document.createElement("div")
  const songArtist = document.createElement("div")

  songElementItem.className = "card-item"
  songElement.className = "card"
  songDetails.className = "text-container"
  songTitle.className = "song-title"
  songArtist.className = "song-artist"

  let songName = e[0]
  if (e[0].charAt(0) == "*") {
    const favoriteIcon = document.createElement("img")
    favoriteIcon.src = "assets/star.png"
    favoriteIcon.className = "favoriteIcon"
    songElement.append(favoriteIcon)
    songName = songName.slice(1)
  }

  if (e[0].length > 18) {
    const songTitleSpan = document.createElement("span")
    songTitleSpan.innerHTML = songName
    songTitle.append(songTitleSpan)
  } else {
    songTitle.innerHTML = songName
  }


  songArtist.innerHTML = e[1]

  songElement.onclick = function() {window.open(e[2], "_blank")}
  songIcon.src = e[3]

  songDetails.append(songTitle, songArtist)
  songElement.append(songIcon, songDetails)
  songElementItem.append(songElement)
  return songElementItem
}

var allSongs = []
window.onload = function() {
  const parent = document.querySelector("#musicContainer")
  const results = document.querySelector("#results")
  const searchBar = document.querySelector("#searchBar")

  results.innerHTML = songs.length
  
  songs.forEach(function(e) {
    let songElementItem = createSongElement(e)
    parent.prepend(songElementItem)
    allSongs.unshift(songElementItem)
  })

  parent.onscroll = function(e) {
    if (parent.scrollTop != 0) {
      parent.style.marginTop = "1em"
      parent.style.height = "calc(100vh - 8.8rem)"
    } else {
      parent.style.marginTop = ""
      parent.style.height = ""
    }
  }

  searchBar.oninput = function(_) {
    allSongs = []
    parent.innerHTML = ""
    songs.forEach(function(e) {
      let query = searchBar.value.toLowerCase()
      if (e[0].toLowerCase().includes(query) ||e[1].toLowerCase().includes(query)) {
        let song = createSongElement(e)
        parent.prepend(song)
        allSongs.unshift(song)
      }
    })

    let items = document.querySelector("#sortItems")
    if (items.children[0].className.includes("selected")) {
      filterSelection(0)
    } else if (items.children[1].className.includes("selected")) {
      filterSelection(1)
    } else if (items.children[2].className.includes("selected")) {
      filterSelection(2)
    }
    // results.innerHTML = parent.children.length
  }
}
