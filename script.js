const dataKaryawan = [
    // Data Karyawan dari OWS ACCOUNT SAPN - Sheet1.csv (Total 99 Entri)
    { Nama: "Julius arjuna", "KTP ID": "1407052610910002", "No. HP XL/Axis/Smartfren": "087734674307", Email: "julius.arjuna.ext@ypttglobal.com", "User Name OWS": "yptt.julius.arjuna", Password: "<i7GcIZ2{$#g", Batch: "1" },
    { Nama: "Wito syahputra", "KTP ID": "1209132602890001", "No. HP XL/Axis/Smartfren": "087734674305", Email: "wito.syahputra.ext@ypttglobal.com", "User Name OWS": "yptt.wito.syahputra", Password: "ZdBV&F07CEX:", Batch: "1" },
    { Nama: "Jasrin alberto", "KTP ID": "1216012311930002", "No. HP XL/Axis/Smartfren": "087734674306", Email: "jasrin.alberto.ext@ypttglobal.com", "User Name OWS": "yptt.jasrin.alberto", Password: "|xmW1!6gs^oN", Batch: "1" },
    { Nama: "Glen martohap s munthe", "KTP ID": "1671080905870013", "No. HP XL/Axis/Smartfren": "088804127353", Email: "glen.martohap.ext@ypttglobal.com", "User Name OWS": "yptt.glen.martohap", Password: "86b~37Ia-0?E", Batch: "1" },
    { Nama: "Muhammad Fahry", "KTP ID": "1275011409930006", "No. HP XL/Axis/Smartfren": "087881588500", Email: "muhammad.fahry.ext@ypttglobal.com", "User Name OWS": "yptt.muhammad.fahry", Password: "u3@DF/7Zhz 1", Batch: "1" },
    { Nama: "Sugeng Riyadi", "KTP ID": "1671071711870006", "No. HP XL/Axis/Smartfren": "088287030487", Email: "sugeng.riyadi.ext@ypttglobal.com", "User Name OWS": "yptt.sugeng.riyadi", Password: "\"9~Po6u]8O\"\"Bh\"", Batch: "1" },
    { Nama: "Vendis Suryadi", "KTP ID": "3310181907920001", "No. HP XL/Axis/Smartfren": "08884123410", Email: "vendis.suryadi.ext@ypttglobal.com", "User Name OWS": "yptt.vendis.suryadi", Password: "wSF0XcJ*A9Ob", Batch: "1" },
    { Nama: "Bara Fandi Ahmad", "KTP ID": "3315052908940003", "No. HP XL/Axis/Smartfren": "087763137378", Email: "bara.fandi.ahmad.ext@ypttglobal.com", "User Name OWS": "yptt.bara.fandi.ahmad", Password: "\"61c&4Nv\"\":23]\"", Batch: "1" },
    { Nama: "Adam Malik Eka Cahyana", "KTP ID": "3310142410960001", "No. HP XL/Axis/Smartfren": "088218008506", Email: "adam.malik.ext@ypttglobal.com", "User Name OWS": "yptt.adam.malik.eka", Password: "-02<ph:DZ3qi", Batch: "1" },
    { Nama: "MUSLIKH ROJULI", "KTP ID": "3305050407820004", "No. HP XL/Axis/Smartfren": "0817757470", Email: "muslikh.rojuli.ext@ypttglobal.com", "User Name OWS": "yptt.muslikh.rojuli", Password: "8t2]4#%b7TJ{", Batch: "1" },
    { Nama: "Rohmad fauzi", "KTP ID": "3175071407740007", "No. HP XL/Axis/Smartfren": "081999909993", Email: "rohmad.fauzi.ext@ypttglobal.com", "User Name OWS": "yptt.rohmad.fauzi", Password: "Ypttcjxls_@123", Batch: "1" },
    { Nama: "Masnur Muslich", "KTP ID": "3521031004870003", "No. HP XL/Axis/Smartfren": "087876063446", Email: "masnur.muslich@ypttglobal.com", "User Name OWS": "yptt.masnur.muslich", Password: "k^NsYzeB/37f", Batch: "1" },
    { Nama: "Rusdiyanto Aji Yoga", "KTP ID": "3502070103880006", "No. HP XL/Axis/Smartfren": "088215804129", Email: "rusdiyanto.aji.yoga.ext@ypttglobal.com", "User Name OWS": "yptt.rusdiyanto.aji.yoga", Password: "4S20ht@%a7Jq", Batch: "1" },
    { Nama: "Arif Efendi", "KTP ID": "3521102106800003", "No. HP XL/Axis/Smartfren": "087730611734", Email: "arif.efendi.ext@ypttglobal.com", "User Name OWS": "yptt.arif.efendi", Password: ";BU5mR|<\9dn", Batch: "1" },
    { Nama: "Vendis Rahmat Susilo", "KTP ID": "3310181806850002", "No. HP XL/Axis/Smartfren": "088226866882", Email: "vendis.rahmat.susilo.ext@ypttglobal.com", "User Name OWS": "yptt.vendis.rahmat.susilo", Password: "f8dJ'UpBR|5P", Batch: "1" },
    { Nama: "DANNU SAPUTRO", "KTP ID": "3310142012020001", "No. HP XL/Axis/Smartfren": "088276385547", Email: "dannu.saputro.ext@ypttglobal.com", "User Name OWS": "yptt.dannu.saputro", Password: "8=NVgk9)*645", Batch: "1" },
    { Nama: "BUDIYANTO", "KTP ID": "3309183001850004", "No. HP XL/Axis/Smartfren": "087727992722", Email: "budiyanto.ext@ypttglobal.com", "User Name OWS": "yptt.budiyanto", Password: "OTbZ$0=|ofX1", Batch: "1" },
    { Nama: "SUPARDI", "KTP ID": "3322041308790004", "No. HP XL/Axis/Smartfren": "087865252565", Email: "supardi.ext@ypttglobal.com", "User Name OWS": "yptt.supardi", Password: "QZjgYJv<52%q", Batch: "1" },
    { Nama: "EDI SAPUTRA", "KTP ID": "3322041008950003", "No. HP XL/Axis/Smartfren": "087733624571", Email: "adi.saputra@ypttglobal.com", "User Name OWS": "yptt.edi.saputra", Password: "&WIx+Z0Gu5'Y", Batch: "1" },
    { Nama: "JOKO RIYADI", "KTP ID": "3322042307780003", "No. HP XL/Axis/Smartfren": "087825053388", Email: "joko.riyadi.ext@ypttglobal.com", "User Name OWS": "yptt.joko.riyadi", Password: "rqD=8Es5f$+T", Batch: "1" },
    { Nama: "EKO SUDARSONO", "KTP ID": "3322032304840001", "No. HP XL/Axis/Smartfren": "087777884848", Email: "eko.sudarsono.ext@ypttglobal.com", "User Name OWS": "yptt.eko.sudarsono", Password: "7aFSzsQ!x?0", Batch: "1" },
    { Nama: "AGNIS JULIANTO", "KTP ID": "3674061407890001", "No. HP XL/Axis/Smartfren": "087736379105", Email: "agnis.julianto.ext@ypttglobal.com", "User Name OWS": "yptt.agnis.julianto", Password: "Zf2*iE}:+|~0", Batch: "1" },
    { Nama: "Perdana Wijaya Kusuma", "KTP ID": "3322021909970001", "No. HP XL/Axis/Smartfren": "087767803227", Email: "perdanawijayakusuma@ypttglobal.com", "User Name OWS": "yptt.perdana.wijaya.kusuma", Password: "7d58EM@Q*HN4", Batch: "1" },
    { Nama: "Muhammad Kiki Alfian", "KTP ID": "3203050212990003", "No. HP XL/Axis/Smartfren": "081808260866", Email: "muhammad.kiki.alfian@ypttglobal.com", "User Name OWS": "yptt.muhammad.kiki.alfian", Password: "\"=R6.H-9KiG,z\"", Batch: "1" },
    { Nama: "Edy Sujarwi", "KTP ID": "3318161910790003", "No. HP XL/Axis/Smartfren": "088980587662", Email: "edy.sujarwi@ypttglobal.com", "User Name OWS": "yptt.edy.sujarwi", Password: "8bV3XjT5z7x-", Batch: "1" },
    { Nama: "Arie Setio Nugroho", "KTP ID": "3304022401880001", "No. HP XL/Axis/Smartfren": "087762471747", Email: "arie.seto.nugroho@ypttglobal.com", "User Name OWS": "yptt.arie.setio.nugroho", Password: "zw#~)7*S0R`9", Batch: "1" },
    { Nama: "Rahmat Hidayat", "KTP ID": "1806022804920001", "No. HP XL/Axis/Smartfren": "088294425218", Email: "rahmathidayat@ypttglobal.com", "User Name OWS": "yptt.rahmat.hidayat", Password: "xMH1/R^k>\\4E", Batch: "1" },
    { Nama: "Edwin Fidriyan", "KTP ID": "3175012304900002", "No. HP XL/Axis/Smartfren": "081990660387", Email: "edwin.fidriyan@ypttglobal.com", "User Name OWS": "yptt.edwin.fidriyan", Password: "3Z1^0t'!fisW", Batch: "1" },
    { Nama: "Argo Dwi Hardika Putra", "KTP ID": "3578052110880001", "No. HP XL/Axis/Smartfren": "088983387474", Email: "argo.dwi.hardika@ypttglobal.com", "User Name OWS": "yptt.argo.dwi.hardika", Password: "!h<Zpz+u9F4g", Batch: "1" },
    { Nama: "Satrio Tegar Prakoso", "KTP ID": "3573050911970001", "No. HP XL/Axis/Smartfren": "087881597273", Email: "satrio.tegar.prakoso@ypttglobal.com", "User Name OWS": "yptt.satrio.tegar.prakoso", Password: "!K8=xs9DmtZ'", Batch: "1" },
    { Nama: "Hariyono", "KTP ID": "3311011108810001", "No. HP XL/Axis/Smartfren": "087772663744", Email: "haryono@ypttglobal.com", "User Name OWS": "yptt.hariyono", Password: "bMli'4X}/u63", Batch: "1" },
    { Nama: "Ferry Dyantoro", "KTP ID": "3578051402890001", "No. HP XL/Axis/Smartfren": "087766647700", Email: "ferry.dyantoro@ypttglobal.com", "User Name OWS": "yptt.ferry.dyantoro", Password: "73O$=~[jJ8Yw", Batch: "1" },
    { Nama: "Andika Saputra", "KTP ID": "3174070706920017", "No. HP XL/Axis/Smartfren": "081952494434", Email: "andika.saputra@ypttglobal.com", "User Name OWS": "YPTT.Andika.Saputra", Password: "\"9qRt8sdeG,:3\"", Batch: "1" },
    { Nama: "Imam Wahidin", "KTP ID": "3328061705970002", "No. HP XL/Axis/Smartfren": "087788429431", Email: "imam.wahidin@ypttglobal.com", "User Name OWS": "yptt.imam.wahidin", Password: "[ia?Ng(%HVd2", Batch: "1" },
    { Nama: "Marno", "KTP ID": "3328061711830002", "No. HP XL/Axis/Smartfren": "081901121842", Email: "marno@ypttglobal.com", "User Name OWS": "yptt.marno", Password: "\"W;z,a8\\dlj 0\"", Batch: "1" },
    { Nama: "Adi Wiyono", "KTP ID": "3322191202870002", "No. HP XL/Axis/Smartfren": "0882008033200", Email: "adi.wiyono@ypttglobal.com", "User Name OWS": "yptt.adi.wiyono", Password: "NO7Jk`wv2$#9", Batch: "1" },
    { Nama: "Nur Al Amin", "KTP ID": "3322182907950001", "No. HP XL/Axis/Smartfren": "081916205844", Email: "nur.al.amin@ypttglobal.com", "User Name OWS": "yptt.nur.al.amin", Password: "x(;l\\8Ra=u'r", Batch: "1" },
    { Nama: "Rudi Fianto", "KTP ID": "3307032706900007", "No. HP XL/Axis/Smartfren": "08776266642", Email: "rudi.fianto@ypttglobal.com", "User Name OWS": "yptt.rudi.fianto", Password: "#1eX)0/6}.9M", Batch: "1" },
    { Nama: "Septiyanto Bahrudin", "KTP ID": "3307030509990002", "No. HP XL/Axis/Smartfren": "083854766018", Email: "septiyanto.bahrudin@ypttglobal.com", "User Name OWS": "yptt.septiyanto.bahrudin", Password: "N7`0?39Jp8U[", Batch: "1" },
    { Nama: "Sru Handoyo", "KTP ID": "3202291109720003", "No. HP XL/Axis/Smartfren": "087858347498", Email: "sru.handoyo.ext@ypttglobal.com", "User Name OWS": "yptt.sru.handoyo", Password: "V1qFZLT<ce*8", Batch: "1" },
    { Nama: "Iman wijaya", "KTP ID": "3603172912850007", "No. HP XL/Axis/Smartfren": "088985790521", Email: "iman.wijaya.ext@ypttglobal.com", "User Name OWS": "yptt.iman.wijaya", Password: "Z&i()Y8{n6:K", Batch: "1" },
    { Nama: "Sukma", "KTP ID": "3201131501820003", "No. HP XL/Axis/Smartfren": "08812462386", Email: "sukma@ypttglobal.com", "User Name OWS": "yptt.sukma", Password: "u}F#<rXk3h(L", Batch: "1" },
    { Nama: "MUJIYANI", "KTP ID": "3329081911930006", "No. HP XL/Axis/Smartfren": "087744494190", Email: "mujiyani@ypttglobal.com", "User Name OWS": "yptt.mujiyani", Password: "|M8:#n+E6`<I", Batch: "1" },
    { Nama: "MUHAMAD SOLIKHIN", "KTP ID": "3329080306930015", "No. HP XL/Axis/Smartfren": "087776255564", Email: "muhamad.solikhin@ypttglobal.com", "User Name OWS": "yptt.muhamad.solikhin", Password: "e0W!p5h4u%8@", Batch: "1" },
    { Nama: "SOHIRIN", "KTP ID": "3329082212920004", "No. HP XL/Axis/Smartfren": "087795230020", Email: "sohirin@ypttglobal.com", "User Name OWS": "yptt.sohirin", Password: "\"X,YA1(r/5 _3\"", Batch: "1" },
    { Nama: "SIDIK NURJAMAN", "KTP ID": "3329080703890009", "No. HP XL/Axis/Smartfren": "087833392949", Email: "sidik.nurjaman@ypttglobal.com", "User Name OWS": "yptt.sidik.nurjaman", Password: "\"U8tgnE!,c[i0\"", Batch: "1" },
    { Nama: "Verdi Aditya Nugroho", "KTP ID": "3322131605900005", "No. HP XL/Axis/Smartfren": "083101017766", Email: "verdi.aditya.nugroho@ypttglobal.com", "User Name OWS": "yptt.verdi.aditya.nugroho", Password: "d.{EaqhA(M6m", Batch: "1" },
    { Nama: "TOPAN ARDIANSA", "KTP ID": "3322132906860001", "No. HP XL/Axis/Smartfren": "087881597274", Email: "topanardiansa@ypttglobal.com", "User Name OWS": "yptt.topan.ardiansa", Password: "hEg;>\\iS0PU*", Batch: "1" },
    { Nama: "Vernanda ade saputra", "KTP ID": "3322131301950003", "No. HP XL/Axis/Smartfren": "0859159903128", Email: "vernanda.ade.saputra@ypttglobal.com", "User Name OWS": "yptt.vernanda.ade.saputra", Password: "4KwS2 Rvd0D)", Batch: "1" },
    { Nama: "Doni Wibowo", "KTP ID": "3322130407890003", "No. HP XL/Axis/Smartfren": "0882007324684", Email: "doni.wibowo@ypttglobal.com", "User Name OWS": "yptt.doni.wibowo", Password: "8p|PgeDA=/39", Batch: "1" },
    { Nama: "Muhamad Choirul Mustajid", "KTP ID": "3374062802970004", "No. HP XL/Axis/Smartfren": "088211782115", Email: "muhamad.choirul.mustajid@ypttglobal.com", "User Name OWS": "yptt.choirul.mustajid", Password: "^a_uR6d&Ch5r", Batch: "1" },
    { Nama: "Agus Samsudin", "KTP ID": "3207064107920007", "No. HP XL/Axis/Smartfren": "087752791424", Email: "agussamsudin@ypttglobal.com", "User Name OWS": "YPTT.Agus.samsudin", Password: "H0~z<]819.N(", Batch: "1" },
    { Nama: "Krisna Agung Wicaksono", "KTP ID": "3322180909920001", "No. HP XL/Axis/Smartfren": "08227361813", Email: "krisna.agung.wicaksono.ext@ypttglobal.com", "User Name OWS": "yptt.krisna.agung", Password: "\"Y,9j sK;iS/p\"", Batch: "1" },
    { Nama: "Indro Widarto", "KTP ID": "3521121501890004", "No. HP XL/Axis/Smartfren": "081912753702", Email: "indro.widarto.ext@ypttglobal.com", "User Name OWS": "yptt.indro.widarto", Password: "d|u3kQ#1s~2M", Batch: "1" },
    { Nama: "Choerul Anam", "KTP ID": "3322180504890001", "No. HP XL/Axis/Smartfren": "087739602072", Email: "choerul.anum.ext@ypttglobal.com", "User Name OWS": "yptt.choerul.anam", Password: "0`@>POhY Q87", Batch: "1" },
    { Nama: "Imansyah Tatut", "KTP ID": "3175071907760013", "No. HP XL/Axis/Smartfren": "085924061791", Email: "imansyah.tatut@ypttglobal.com", "User Name OWS": "yptt.imansyah.tatut", Password: "#j6}8BaKdJ0]", Batch: "1" },
    { Nama: "KHOLID ABDUL JABAR", "KTP ID": "3202300106960010", "No. HP XL/Axis/Smartfren": "088219929906", Email: "kholid.abdul.jabar@ypttglobal.com", "User Name OWS": "yptt.kholid.abdul.jabar", Password: "\"o!\"\"7?0X.f O=\"", Batch: "1" },
    { Nama: "Fauzi", "KTP ID": "3175102607840001", "No. HP XL/Axis/Smartfren": "087734672776", Email: "fauzi@ypttglobal.com", "User Name OWS": "yptt.fauzi", Password: ")vM>6fb1~2jC", Batch: "1" },
    { Nama: "Rizki Akbar", "KTP ID": "3276051210950001", "No. HP XL/Axis/Smartfren": "08818008746", Email: "rizky.akbar.ext@ypttglobal.com", "User Name OWS": "yptt.rizki.akbar", Password: "ZFqS9<j85r3m", Batch: "1" },
    { Nama: "Nur Muhamad Azhari", "KTP ID": "3175101010900010", "No. HP XL/Axis/Smartfren": "081916772333", Email: "nur.muhamad.azhari.ext@ypttglobal.com", "User Name OWS": "yptt.nur.muhamad.azhari", Password: "\"k(1\"\"H56zm$p\"", Batch: "1" },
    { Nama: "Gaudensius V Bala U", "KTP ID": "3175102201820004", "No. HP XL/Axis/Smartfren": "081913729988", Email: "gaudensius.v.bala.ext@ypttglobal.com", "User Name OWS": "yptt.gaudensius.v.bala.u", Password: ")K0g@TwsVb51", Batch: "1" },
    { Nama: "Untung budi suryono", "KTP ID": "3276023001790009", "No. HP XL/Axis/Smartfren": "081910812268", Email: "untung.budi.suryono.ext@ypttglobal.com", "User Name OWS": "yptt.untung.budi.suryono", Password: "(9H4mod5^6j0", Batch: "1" },
    { Nama: "Zakeus T Woro", "KTP ID": "3275050912780012", "No. HP XL/Axis/Smartfren": "081931752716", Email: "zakeus.t.woro.ext@ypttglobal.com", "User Name OWS": "yptt.zakeus.t.woro", Password: "5|rbWvAnh9[x", Batch: "1" },
    { Nama: "Wahyudi", "KTP ID": "3312142010840002", "No. HP XL/Axis/Smartfren": "087871868223", Email: "wahyudi@ypttglobal.com", "User Name OWS": "yptt.wahyudi", Password: "\"T,\"\"}K;eZP2s'\"", Batch: "1" },
    { Nama: "Mohamad Riyan Wachidin", "KTP ID": "3515132304930001", "No. HP XL/Axis/Smartfren": "087831802242", Email: "mohamad.riyan@ypttglobal.com", "User Name OWS": "yptt.riyan.wachidin", Password: "~bvH!7|+AY63", Batch: "1" },
    { Nama: "Rifky Adi Prastyo", "KTP ID": "3322030706070001", "No. HP XL/Axis/Smartfren": "083829913109", Email: "rifky.adi@ypttglobal.com", "User Name OWS": "yptt.rifky.adi.prastyo", Password: "jd8YA/E0e5|i", Batch: "1" },
    { Nama: "Kusno Sujarwadi", "KTP ID": "3305041406840001", "No. HP XL/Axis/Smartfren": "087711702832", Email: "kusno.sujarwadi.ext@ypttglobal.com", "User Name OWS": "yptt.kusno.sujarwadi", Password: "7BT35_0p1c;9", Batch: "1" },
    { Nama: "Saryono", "KTP ID": "3305050812890002", "No. HP XL/Axis/Smartfren": "087834970592", Email: "saryono.ext@ypttglobal.com", "User Name OWS": "yptt.saryono", Password: "08WURl3%Cw.~", Batch: "1" },
    { Nama: "Saga Tofani", "KTP ID": "3276021107870007", "No. HP XL/Axis/Smartfren": "088216789582", Email: "saga.tofani.ext@ypttglobal.com", "User Name OWS": "yptt.saga.tofani", Password: "A5DzaxX98d2+", Batch: "1" },
    { Nama: "Arif Wibowo", "KTP ID": "3305050203875378", "No. HP XL/Axis/Smartfren": "0882016880722", Email: "arif.wibowo.ext@ypttglobal.com", "User Name OWS": "yptt.arif.wibowo", Password: "M32DBL-QoIZ7", Batch: "1" },
    { Nama: "Hambali Radjiman Putra", "KTP ID": "3203022802920006", "No. HP XL/Axis/Smartfren": "085959423150", Email: "hambali.radjiman.putra.ext@ypttglobal.com", "User Name OWS": "yptt.hambali.radjiman", Password: "C1R[Hi?Z3Fz/", Batch: "1" },
    { Nama: "Tatang", "KTP ID": "3604030905820063", "No. HP XL/Axis/Smartfren": "081779458890", Email: "tatang.ext@ypttglobal.com", "User Name OWS": "yptt.tatang", Password: "05e8O'9dA\\%4", Batch: "1" },
    { Nama: "Ismail", "KTP ID": "3215151408930005", "No. HP XL/Axis/Smartfren": "088980856985", Email: "ismail.ext@ypttglobal.com", "User Name OWS": "yptt.ismail", Password: "(h#G90v3NIUW", Batch: "1" },
    { Nama: "Wildan Mahlada", "KTP ID": "3671092405010003", "No. HP XL/Axis/Smartfren": "087883351891", Email: "wildan.mahlada.ext@ypttglobal.com", "User Name OWS": "yptt.wildan.mahlada", Password: "zbtQ6^is29UH", Batch: "1" },
    { Nama: "Firdaus", "KTP ID": "3671071708790014", "No. HP XL/Axis/Smartfren": "0882006884690", Email: "firdaus.ext@ypttglobal.com", "User Name OWS": "yptt.firdaus", Password: "8!f=pl Z(9/n", Batch: "1" },
    { Nama: "Aghaz Pernanda Abdillah", "KTP ID": "3603122107000007", "No. HP XL/Axis/Smartfren": "08818674381", Email: "aghaz.pernanda.abdillah.ext@ypttglobal.com", "User Name OWS": "yptt.aghaz.pernanda", Password: "69L8k)t`1.Sr", Batch: "1" },
    { Nama: "Junaedi Exel", "KTP ID": "3213151109890005", "No. HP XL/Axis/Smartfren": "088983908163", Email: "junaedi.excel.ext@ypttglobal.com", "User Name OWS": "yptt.junaedi.exel", Password: "!k)3Az~v'1R2", Batch: "1" },
    { Nama: "Ahmad Tarlidin", "KTP ID": "3603121506030005", "No. HP XL/Axis/Smartfren": "088210552407", Email: "ahmad.tarlidin.ext@ypttglobal.com", "User Name OWS": "yptt.ahmad.tarlidin", Password: "Md/nS2&3+i46", Batch: "1" },
    { Nama: "Yudi Maulana", "KTP ID": "3671091304820001", "No. HP XL/Axis/Smartfren": "081927599514", Email: "yudi.maulana.ext@ypttglobal.com", "User Name OWS": "yptt.yudi.maulana", Password: "o2`1v6PmQ4a.", Batch: "1" },
    { Nama: "Muhamad Irvan Alamsyah", "KTP ID": "3671090104980005", "No. HP XL/Axis/Smartfren": "085930352444", Email: "muhamad.irvan.alamsyah.ext@ypttglobal.com", "User Name OWS": "yptt.irvan.alamsyah", Password: "\"M2iX,0\\h 9md\"", Batch: "1" },
    { Nama: "Dadan", "KTP ID": "3604030107940027", "No. HP XL/Axis/Smartfren": "083167166527", Email: "dadan.ext@ypttglobal.com", "User Name OWS": "yptt.dadan", Password: "_Gs93otVm6H{", Batch: "1" },
    { Nama: "Ignatius Tegar Setiawan", "KTP ID": "3603122608030007", "No. HP XL/Axis/Smartfren": "088809355815", Email: "ignatius.tegar.setiawan.ext@ypttglobal.com", "User Name OWS": "yptt.ignatius.tegar.setiawan", Password: "Hf*83w|4ABq}", Batch: "1" },
    { Nama: "Angga", "KTP ID": "3213091606960006", "No. HP XL/Axis/Smartfren": "083114441454", Email: "angga.ext@ypttglobal.com", "User Name OWS": "yptt.angga", Password: "h-b21YW45kli", Batch: "1" },
    { Nama: "Muhammad ardi", "KTP ID": "1871200503030002", "No. HP XL/Axis/Smartfren": "081943780498", Email: "muhammad.ardi.ext@ypttglobal.com", "User Name OWS": "yptt.muhammad.ardi", Password: "rFW8?26s>$L|", Batch: "1" },
    { Nama: "Muhammad Fikri Ferinanda", "KTP ID": "3603122505970017", "No. HP XL/Axis/Smartfren": "088216131262", Email: "muhammad.fikri.ferinanda.ext@ypttglobal.com", "User Name OWS": "yptt.muhammad.fikri.ferinanda", Password: "HSl.}m!B04~W", Batch: "1" },
    { Nama: "Moh. Fuad Hasyim", "KTP ID": "3315093112890007", "No. HP XL/Axis/Smartfren": "081931750665", Email: "moh.fuad.hasyim.ext@ypttglobal.com", "User Name OWS": "yptt.moh.fuad.hasyim", Password: "\"^>|L3\"\"u5~0`=\"", Batch: "1" },
    { Nama: "Muhammad Rofiqul Umam", "KTP ID": "3321011604030001", "No. HP XL/Axis/Smartfren": "088983225598", Email: "muhammad.rofiqul.umam.ext@ypttglobal.com", "User Name OWS": "yptt.muhammad.rofiqul.umam", Password: "ZR>QG8=0@1qj", Batch: "1" },
    { Nama: "Jauvan Asmara", "KTP ID": "3503110606920002", "No. HP XL/Axis/Smartfren": "087861497479", Email: "jauvan.asmara@ypttglobal.com", "User Name OWS": "yptt.jauvan.asmara", Password: "\"jnGqZ8\"\"AF.39\"", Batch: "1" },
    { Nama: "Budi Wahyono", "KTP ID": "3308090910930001", "No. HP XL/Axis/Smartfren": "088275416293", Email: "budi.wahyono@ypttglobal.com", "User Name OWS": "yptt.budi.wahyono", Password: "%a?`NzxO36B&", Batch: "1" },
    { Nama: "Komarudin", "KTP ID": "3374121803780003", "No. HP XL/Axis/Smartfren": "081216785232", Email: "komarudin@ypttglobal.com", "User Name OWS": "yptt.komarudin", Password: "m;>0CzXE2'6\\", Batch: "1" },
    { Nama: "Arif Putra Anggara", "KTP ID": "3172021905000010", "No. HP XL/Axis/Smartfren": "088227212104", Email: "arif.putra.anggara@ypttglobal.com", "User Name OWS": "yptt.arif.putra.anggara", Password: "F61+}&XmS4qh", Batch: "1" },
    { Nama: "Saepul iman", "KTP ID": "3205130204980001", "No. HP XL/Axis/Smartfren": "088227212103", Email: "saepul.iman@ypttglobal.com", "User Name OWS": "yptt.saepul.iman", Password: "_oT\\p^+64b1S", Batch: "1" },
    { Nama: "Dimas Tri Prayogi", "KTP ID": "3175070209910010", "No. HP XL/Axis/Smartfren": "087784872155", Email: "dimas.tri.prayogi@ypttglobal.com", "User Name OWS": "yptt.dimas.tri.prayogi", Password: "k7r#8epMJi>\\", Batch: "1" },
    { Nama: "Wika Nurul Huda", "KTP ID": "3374130708880007", "No. HP XL/Axis/Smartfren": "087779028858", Email: "wika.nurul.huda@ypttglobal.com", "User Name OWS": "yptt.wika.nurul.huda", Password: "W8q693xL/<n", Batch: "1" },
    { Nama: "FRAN DANAR HADI", "KTP ID": "3326101106980002", "No. HP XL/Axis/Smartfren": "085931542902", Email: "fran.danar.hadi@ypttglobal.com", "User Name OWS": "yptt.fran.danar.hadi", Password: "gKq8QN )2A_&", Batch: "1" },
    { Nama: "Tommy Dharmawan", "KTP ID": "3277031503000015", "No. HP XL/Axis/Smartfren": "081918103926", Email: "tommy.dharmawan@ypttglobal.com", "User Name OWS": "yptt.tommy.dharmawan", Password: "\"G7~4\"\"pAo59J|\"", Batch: "1" },
    { Nama: "Refki Setiawan", "KTP ID": "3275010606890039", "No. HP XL/Axis/Smartfren": "0882003969206", Email: "refki.setiawan2@ypttglobal.com", "User Name OWS": "yptt.refki.setiawan", Password: "N27H}0 &x5U[", Batch: "1" },
    { Nama: "Firgiawan Susandi", "KTP ID": "3275092508920007", "No. HP XL/Axis/Smartfren": "08976138336", Email: "firgiawan.susandi@ypttglobal.com", "User Name OWS": "yptt.firgiawan.susandi", Password: "C5`%=9(.s8We", Batch: "1" },
    { Nama: "Andhika Pratama", "KTP ID": "2172021407890004", "No. HP XL/Axis/Smartfren": "0881010534262", Email: "andhika.pratama.ext@ypttglobal.com", "User Name OWS": "yptt.andhika.pratama", Password: "0Ue2g$BZN?_F", Batch: "1" },
    { Nama: "Muhammad Denis", "KTP ID": "3171042512930002", "No. HP XL/Axis/Smartfren": "087889002678", Email: "muhammad.denis.ext@ypttglobal.com", "User Name OWS": "yptt.muhammad.denis", Password: "JsU~3t6%8`4?", Batch: "1" },
    { Nama: "Adam Irwanda", "KTP ID": "3310051409990002", "No. HP XL/Axis/Smartfren": "08814889281", Email: "adam.irwanda.ext@ypttglobal.com", "User Name OWS": "yptt.adam.irwanda", Password: "=+=Qp?/%[9P8r", Batch: "1" },
    { Nama: "Kurniawan Dwi Novenda", "KTP ID": "3302232711980003", "No. HP XL/Axis/Smartfren": "0882008185033", Email: "kurniawan.dwi.novenda.ext@ypttglobal.com", "User Name OWS": "yptt.kurniawan.dwi.novenda", Password: "P]vFX;Bj)8R#", Batch: "1" },
    { Nama: "ENDRYA PUTRA", "KTP ID": "3275011901910005", "No. HP XL/Axis/Smartfren": "0817319916", Email: "endrya.putra@ypttglobal.com", "User Name OWS": "yptt.endrya.putra", Password: "?Z^t1Dlx3_6g", Batch: "1" },
    { Nama: "ABDUL HAKIM FATAHILLAH", "KTP ID": "3275011312910007", "No. HP XL/Axis/Smartfren": "088991798935", Email: "abdul.hakim.ext@ypttglobal.com", "User Name OWS": "yptt.abdul.hakim.fatahillah", Password: "YGAftcT)De96", Batch: "1" },
    { Nama: "HAMDI", "KTP ID": "3275030607860018", "No. HP XL/Axis/Smartfren": "088906230555", Email: "hamdi@ypttglobal.com", "User Name OWS": "yptt.hamdi", Password: "{blC2z~u$(O=", Batch: "1" },
    { Nama: "CHAIRUL ANWAR", "KTP ID": "3171052401880002", "No. HP XL/Axis/Smartfren": "087888921049", Email: "chairul.anwar@ypttglobal.com", "User Name OWS": "yptt.chairul.anwar", Password: "p9k4ZBd/P_13", Batch: "1" },
    { Nama: "Moch Nurul Hidayat Arifiansyah", "KTP ID": "3515180411930004", "No. HP XL/Axis/Smartfren": "083849551743", Email: "moch.nurul.hidayat.arifiyansyah@ypttglobal.com", "User Name OWS": "yptt.nurul.hidayat.arifiansyah", Password: "*viVgkS8dU5`", Batch: "1" },
    { Nama: "Raka Bratajaya", "KTP ID": "3573031609860009", "No. HP XL/Axis/Smartfren": "083181639711", Email: "raka.bratajaya@ypttglobal.com", "User Name OWS": "yptt.raka.bratajaya", Password: "h67B4mJLD3", Batch: "1" },
    { Nama: "ENDAR FAUZI", "KTP ID": "3303170911980001", "No. HP XL/Axis/Smartfren": "087827602481", Email: "endar.fauzi.ext@ypttglobal.com", "User Name OWS": "yptt.endar.fauzi", Password: "\"t:eA3/\"\"G1v6@\"", Batch: "1" },
    { Nama: "Johan Isroi", "KTP ID": "3308080106790005", "No. HP XL/Axis/Smartfren": "085946444830", Email: "johan.isroi.ext@ypttglobal.com", "User Name OWS": "yptt.johan.isroi", Password: "Z?\\.86QH[zlA", Batch: "1" },
    { Nama: "Adip Rian Praditia", "KTP ID": "3321021205080001", "No. HP XL/Axis/Smartfren": "087709692018", Email: "adip.rian.pradipta.ext@ypttglobal.com", "User Name OWS": "yptt.adip.rian.praditia", Password: "8kER5)6(Ye4W", Batch: "1" },
    { Nama: "Handi Permana", "KTP ID": "3321012306040003", "No. HP XL/Axis/Smartfren": "087831671125", Email: "handi.permana.ext@ypttglobal.com", "User Name OWS": "yptt.handi.permana", Password: "nB]_E7`3L9jp", Batch: "1" },
    { Nama: "Uliz Zadit Taqwa", "KTP ID": "3321021706030003", "No. HP XL/Axis/Smartfren": "087831656094", Email: "uliz.zadit.taqwa.ext@ypttglobal.com", "User Name OWS": "yptt.uliz.zadit.taqwa", Password: "\"~,uG@0\\dp]:5\"", Batch: "1" },
    { Nama: "Husen Al Fikri", "KTP ID": "3321010810040001", "No. HP XL/Axis/Smartfren": "087831656096", Email: "husan.al.fikri.ext@ypttglobal.com", "User Name OWS": "yptt.husen.al.fikri", Password: "0bN783tWT:F}", Batch: "1" },
    { Nama: "Syamsudin", "KTP ID": "3201371403860003", "No. HP XL/Axis/Smartfren": "087886821043", Email: "syamsudin.ext@ypttglobal.com", "User Name OWS": "yptt.syamsudin", Password: ">F7Qz5:[CgNI", Batch: "1" },
    { Nama: "Arya Andika Purbo Husodo", "KTP ID": "3374102505040006", "No. HP XL/Axis/Smartfren": "088216789582", Email: "arya.andika.purbo.husodo.ext@ypttglobal.com", "User Name OWS": "yptt.arya.andika.husodoo", Password: "2MwPG+uz 5{L", Batch: "1" },
    { Nama: "Nur Hasan", "KTP ID": "3323012711960003", "No. HP XL/Axis/Smartfren": "087863682741", Email: "nur.hasan.ext@ypttglobal.com", "User Name OWS": "yptt.nur.hasan", Password: "KT%pAX9Eh14>", Batch: "1" },
    { Nama: "Sugih Nurmadani", "KTP ID": "3207061802950001", "No. HP XL/Axis/Smartfren": "087875770495", Email: "sugih.nuramdani@ypttglobal.com", "User Name OWS": "yptt.sugih.nurmadani", Password: "|hxZwl2PsR]5", Batch: "1" },
    { Nama: "Yosep Hendriana", "KTP ID": "3207060910970002", "No. HP XL/Axis/Smartfren": "087863682741", Email: "yosep.hendriana.ext@ypttglobal.com", "User Name OWS": "yptt.yosep.hendriana", Password: "e=~;4z^9SOXs", Batch: "1" },
    { Nama: "Ridwan", "KTP ID": "3323011301910002", "No. HP XL/Axis/Smartfren": "087724196841", Email: "ridwan.ext@ypttglobal.com", "User Name OWS": "yptt.ridwan", Password: "\"jJk]8s0;o,6O\"", Batch: "1" },
    { Nama: "Nugroho Sunartejo", "KTP ID": "3319071203920006", "No. HP XL/Axis/Smartfren": "085962732389", Email: "nugroho.sunartejo.ext@ypttglobal.com", "User Name OWS": "yptt.nugroho.sunartejo", Password: "izU3}x]mW_bu", Batch: "1" },
    { Nama: "Rudi Wianto", "KTP ID": "1207261009860005", "No. HP XL/Axis/Smartfren": "087849604336", Email: "rudi.wianto.ext@ypttglobal.com", "User Name OWS": "yptt.rudi.wianto", Password: "MsbP(q8R2K:*", Batch: "1" },
    { Nama: "Andry Setyo Nugroho", "KTP ID": "3374132803900002", "No. HP XL/Axis/Smartfren": "085954045059", Email: "andry.setyo.nugroho.ext@ypttglobal.com", "User Name OWS": "yptt.andry.setyo.nugroho", Password: ":9;XAk{+35t@", Batch: "1" },
    { Nama: "Kristiyanu Kumala", "KTP ID": "3173012308000008", "No. HP XL/Axis/Smartfren": "087770898702", Email: "kristiyanu.kumala.ext@ypttglobal.com", "User Name OWS": "yptt.kristiyanu.kumala", Password: "{3_5gbziIa7T", Batch: "1" },
    { Nama: "fitrianto", "KTP ID": "3307040207840004", "No. HP XL/Axis/Smartfren": "088215304205", Email: "fitrianto.ext@ypttglobal.com", "User Name OWS": "yptt.fitrianto", Password: "9[1-B`z5<NT>", Batch: "1" },
    { Nama: "udin riyadi", "KTP ID": "3304041503930005", "No. HP XL/Axis/Smartfren": "081915444834", Email: "udin.riyadi.ext@ypttglobal.com", "User Name OWS": "yptt.udin.riyadi", Password: "\"7Rz)1f\"\"=4qF?\"", Batch: "1" },
    { Nama: "Hamzah tribowo", "KTP ID": "3307042607010006", "No. HP XL/Axis/Smartfren": "0882324453880", Email: "hamzah.tribowo.ext@ypttglobal.com", "User Name OWS": "yptt.hamsyah.tri.bowo", Password: "s=}C`DFX8$41", Batch: "1" },
    { Nama: "Lala Tubagus", "KTP ID": "3175100707800001", "No. HP XL/Axis/Smartfren": "0882003409199", Email: "lala.tubagus.ext@ypttglobal.com", "User Name OWS": "yptt.lala.tubagus", Password: "w3=A1%)9$DFt", Batch: "1" },
    { Nama: "Mangasi Sidabalok", "KTP ID": "3301062909790002", "No. HP XL/Axis/Smartfren": "0882003656756", Email: "mangasi.sidabalok@ypttglobal.com", "User Name OWS": "yptt.mangasi.sidabalok", Password: ")Fv5a2\\c`4+s", Batch: "1" },
    { Nama: "Verga Fadilah", "KTP ID": "3208030609970002", "No. HP XL/Axis/Smartfren": "0882007489002", Email: "verga.fadilah@ypttglobal.com", "User Name OWS": "yptt.verga.fadilah", Password: "le%iO1j<w3Vf", Batch: "1" },
    { Nama: "Angga Maulana", "KTP ID": "1801062409940005", "No. HP XL/Axis/Smartfren": "087743109306", Email: "angga.maulana.ext@ypttglobal.com", "User Name OWS": "yptt.angga.maulana", Password: "[F)192o`=7^f", Batch: "1" },
    { Nama: "Adi Supriyanto", "KTP ID": "3328061010900006", "No. HP XL/Axis/Smartfren": "087875555848", Email: "adisupriyanto@ypttglobal.com", "User Name OWS": "YPTT.Adi.supriyanto", Password: "UMlf^`5Ebv[X", Batch: "1" },
    { Nama: "Anton Sujarwanto", "KTP ID": "33140725503880005", "No. HP XL/Axis/Smartfren": "087773403055", Email: "anton.sujarwanto.ext@ypttglobal.com", "User Name OWS": "yptt.anton.sujarwanto", Password: "Ypttcjxls123!", Batch: "1" },
    { Nama: "Warsoi", "KTP ID": "3175081005920003", "No. HP XL/Axis/Smartfren": "087786726396", Email: "warsoi@ypttglobal.com", "User Name OWS": "yptt.warsoi", Password: "0?6c`Ovm43xq", Batch: "2" },
    { Nama: "Andi Tomi Handoyo", "KTP ID": "3374052605880002", "No. HP XL/Axis/Smartfren": "0882003172399", Email: "andi.tomi@ypttglobal.com", "User Name OWS": "yptt.andi.tomi.handoyo", Password: "6n%p1HV-`r*I", Batch: "2" },
    { Nama: "Zaenal Arifin", "KTP ID": "3327121603960005", "No. HP XL/Axis/Smartfren": "083806896643", Email: "zaenal.arifin@ypttglobal.com", "User Name OWS": "yptt.zaenal.arifin", Password: "\"MGP%9 0u|,-z\"", Batch: "2" },
    { Nama: "Dedi Junaedi", "KTP ID": "3216191304820005", "No. HP XL/Axis/Smartfren": "087736843097", Email: "dedi.junaedi@ypttglobal.com", "User Name OWS": "yptt.dedi.junaedi", Password: "10Kw!?LWzEQj", Batch: "2" },
    { Nama: "Mohammad Ainun Najib", "KTP ID": "3321120607010002", "No. HP XL/Axis/Smartfren": "087736842465", Email: "mohammad.ainun.najib.ext@ypttglobal.com", "User Name OWS": "yptt.mohammad.ainun.najib", Password: "Q{Uq?D9Gs|Xr", Batch: "2" },
    { Nama: "Muhammad Syaiful Rochman", "KTP ID": "3302102802940003", "No. HP XL/Axis/Smartfren": "087723081778", Email: "muhammad.syaiful.rochman.ext@ypttglobal.com", "User Name OWS": "yptt.muhammad.syaiful", Password: "FIHLo7=!0m#T", Batch: "2" },
    { Nama: "Yogi walagri", "KTP ID": "3201010208930006", "No. HP XL/Axis/Smartfren": "085799767334", Email: "yogi.walagri.ext@ypttglobal.com", "User Name OWS": "yptt.yogi.walagri", Password: "t2ok?Ib8q.m;", Batch: "2" },
    { Nama: "KRISTIAN KURNIAWAN PUTRA", "KTP ID": "3674032204880001", "No. HP XL/Axis/Smartfren": "0881010165181", Email: "kristian.kurniawan.putra.ext@ypttglobal.com", "User Name OWS": "yptt.kristian.kurniawan.putra", Password: "2zHF7_d/n~Ku", Batch: "2" },
    { Nama: "UUNG HIDAYAT", "KTP ID": "1809062604920002", "No. HP XL/Axis/Smartfren": "083851015618", Email: "uung.hidayat.ext@ypttglobal.com", "User Name OWS": "yptt.uung.hidayat", Password: "XjQ25~9sY0+v", Batch: "2" },
    { Nama: "FAADHIL IVAN SYAH", "KTP ID": "3674041112010001", "No. HP XL/Axis/Smartfren": "087725555240", Email: "Faadhil.ivan.syah.ext@ypttglobal.com", "User Name OWS": "yptt.faadhil.ivan.syah", Password: "\"Dl,M8`sqEY_1\"", Batch: "2" },
    { Nama: "INDRA SETIAWAN", "KTP ID": "3302141604920001", "No. HP XL/Axis/Smartfren": "088216488733", Email: "indra.setiawan.ext@ypttglobal.com", "User Name OWS": "yptt.indra.setiawan", Password: "JPw%-N$}^c7z", Batch: "2" },
    { Nama: "David Setiawan", "KTP ID": "3308100103920001", "No. HP XL/Axis/Smartfren": "085713528869‬", Email: "david.setiawan.ext@ypttglobal.com", "User Name OWS": "yptt.david.setiawan", Password: ">d5OF1.TmQCL", Batch: "2" },
    { Nama: "ALIEF ZULFAN SASMANATA", "KTP ID": "3373030407760005", "No. HP XL/Axis/Smartfren": "081996719835", Email: "alief.zulfan.sasmanata.ext@ypttglobal.com", "User Name OWS": "yptt.alief.zulfan.sasmanata", Password: "fkCNwg1Kn-I$", Batch: "2" },
    { Nama: "HERLAMBANG RUMONO", "KTP ID": "3308100103920001", "No. HP XL/Axis/Smartfren": "0882006860236", Email: "herlambang.rumono.ext@ypttglobal.com", "User Name OWS": "yptt.herlambang.rumono", Password: "9q6JN<#MTi(U", Batch: "2" },
    { Nama: "BUDIYANA", "KTP ID": "3310041603850001", "No. HP XL/Axis/Smartfren": "087786729632", Email: "budiyana.ext@ypttglobal.com", "User Name OWS": "yptt.budiyana", Password: "63=7haN|P(41", Batch: "2" },
    { Nama: "Restu Bayu Satri", "KTP ID": "3374132805030001", "No. HP XL/Axis/Smartfren": "087726939194", Email: "restu.bayu.satri.ext@ypttglobal.com", "User Name OWS": "yptt.restu.bayu.satri", Password: "R34+aFg0%&8E", Batch: "2" },
    { Nama: "Rizal Hilmy Alhady", "KTP ID": "3374131911990001", "No. HP XL/Axis/Smartfren": "0882006860236", Email: "rizal.hilmy.alhady.ext@ypttglobal.com", "User Name OWS": "yptt.rizal.hilmy.alhady", Password: "~B4&lYj)s-+!", Batch: "2" },
    { Nama: "Alfredo Primadear Saragih", "KTP ID": "3275050608940010", "No. HP XL/Axis/Smartfren": "085946408416", Email: "alfredo.primadear@ypttglobal.com", "User Name OWS": "yptt.alfredo.primadear.saragih", Password: "#ERROR!", Batch: "3" },
    { Nama: "Andin Prastiawan", "KTP ID": "3307030803910004", "No. HP XL/Axis/Smartfren": "087858343018", Email: "andin.prastiawan@ypttglobal.com", "User Name OWS": "yptt.andin.prastiawan", Password: "k8|C<w4'LrXz", Batch: "3" },
    { Nama: "Ridzki Muhamad Ramadhan", "KTP ID": "3208140401000002", "No. HP XL/Axis/Smartfren": "087768804214", Email: "rizky.muhamad.ramadhan@ypttglobal.com", "User Name OWS": "yptt.ridzki.muhamad", Password: "\"z3*}=tJO47\"\"\\\"", Batch: "3" },
    { Nama: "BAHRUDIN", "KTP ID": "1809032901070002", "No. HP XL/Axis/Smartfren": "087797561908", Email: "bahrudin@ypttglobal.com", "User Name OWS": "yptt.bahrudin", Password: "0()m8Cp@9u}#", Batch: "3" },
    { Nama: "ANGGA KUSWARA", "KTP ID": "3271042307910004", "No. HP XL/Axis/Smartfren": "087780781953", Email: "angga.kuswara@ypttglobal.com", "User Name OWS": "yptt.angga.kuswara", Password: "ME5F1&[j<*Ob", Batch: "3" },
    { Nama: "MUHAMAD YUSUF MAULANA", "KTP ID": "3271030607790003", "No. HP XL/Axis/Smartfren": "087830221829", Email: "muhammad.yusuf.maulana@ypttglobal.com", "User Name OWS": "yptt.muhamad.yusuf.maulana", Password: "M0ej=2wJczKd", Batch: "3" },
    { Nama: "IRAWAN SETIOPRAMONO", "KTP ID": "3374130207770008", "No. HP XL/Axis/Smartfren": "087882818133", Email: "irawan.setio.pramono.ext@ypttglobal.com", "User Name OWS": "yptt.irawan.setiopramono", Password: "\"AuEi8N\"\"KJpXW\"", Batch: "3" },
    { Nama: "Egi Setiawan", "KTP ID": "3211062212930004", "No. HP XL/Axis/Smartfren": "", Email: "egi.setiawan.ext@ypttglobal.com", "User Name OWS": "yptt.egi.setiawan", Password: "&{zNb6s7]jY+", Batch: "3" },
    { Nama: "Mohamad Ismail", "KTP ID": "3212091501940001", "No. HP XL/Axis/Smartfren": "", Email: "mohamad.ismail.ext@ypttglobal.com", "User Name OWS": "yptt.mohamad.ismail", Password: "dL?45gw~Ui`T", Batch: "3" },
    { Nama: "NOFIANTO", "KTP ID": "3315180211920002", "No. HP XL/Axis/Smartfren": "", Email: "nofianto.ext@ypttglobal.com", "User Name OWS": "yptt.nofianto", Password: "Je89}*iwIfr:", Batch: "3" },
    { Nama: "HAFITRI PRASETYA", "KTP ID": "3321011605880002", "No. HP XL/Axis/Smartfren": "", Email: "hafitri.prasetya.ext@ypttglobal.com", "User Name OWS": "yptt.hafitri.prasetya", Password: "0K7Nxj'1b>:)", Batch: "3" },
    { Nama: "Muhaimin", "KTP ID": "3323010704030001", "No. HP XL/Axis/Smartfren": "081914322430", Email: "muhaimin.ext@ypttglobal.com", "User Name OWS": "yptt.muhaimin", Password: "Zp3YS?9]v 4>", Batch: "3" },
    { Nama: "ALI ASYIKIN", "KTP ID": "3374042805710004", "No. HP XL/Axis/Smartfren": "087843971133", Email: "ali.asyikin.ext@ypttglobal.com", "User Name OWS": "yptt.ali.asyikin", Password: "@CF8_.W=4u1%", Batch: "3" },
    { Nama: "AHMAD FAISAL ALFARISI", "KTP ID": "3374051606990002", "No. HP XL/Axis/Smartfren": "081936165676", Email: "ahmad.faisal.alfarisi.ext@ypttglobal.com", "User Name OWS": "yptt.ahmad.faisal.alfarisi", Password: "R7`gC5~3]}8/", Batch: "3" },
    { Nama: "CATUR DEWANGGA", "KTP ID": "3301211812870003", "No. HP XL/Axis/Smartfren": "087736625511", Email: "catur.dewangga.ext@ypttglobal.com", "User Name OWS": "yptt.catur.dewangga", Password: "2LKh7AuD16W{", Batch: "3" },
    { Nama: "Bagas Argilikha", "KTP ID": "3374021408960001", "No. HP XL/Axis/Smartfren": "081912753698", Email: "bagas.argilikha.ext@ypttglobal.com", "User Name OWS": "yptt.bagas.argilikha", Password: "AX6m3Sd@45/a", Batch: "3" },
    { Nama: "Samsul Arif", "KTP ID": "3319051102880004", "No. HP XL/Axis/Smartfren": "085938598867", Email: "samsul.arif@ypttglobal.com", "User Name OWS": "yptt.samsul.arif", Password: "kGYW731H%F{.", Batch: "3" },
    { Nama: "MAULANA", "KTP ID": "3603031009040002", "No. HP XL/Axis/Smartfren": "083176866068", Email: "maulana.ext@ypttglobal.com", "User Name OWS": "YPTT.Maulana", Password: "\"8F*_\"\"X=VQhnE\"", Batch: "3" },
    { Nama: "slamet khoerudin", "KTP ID": "3304040302910003", "No. HP XL/Axis/Smartfren": "0882006300034", Email: "slamet.khoerudin.ext@ypttglobal.com", "User Name OWS": "yptt.slamet.khoerudin", Password: "\"^n(7\"\"J+wYM'2\"", Batch: "3" },
    { Nama: "Triarso Hari Wibowo", "KTP ID": "3371022506800001", "No. HP XL/Axis/Smartfren": "", Email: "triarso.hari.wibowo@ypttglobal.com", "User Name OWS": "yptt.triarso.hari.wibowo", Password: "m9f}BHp<NT4.", Batch: "4" },
    { Nama: "YOPAN", "KTP ID": "3209260706880014", "No. HP XL/Axis/Smartfren": "087858347572", Email: "yopan@ypttglobal.com", "User Name OWS": "YPTT.YOPAN", Password: "n5x4~.r*L1|V", Batch: "4" },
    { Nama: "STEVY AGUSTINUS", "KTP ID": "3203110608830012", "No. HP XL/Axis/Smartfren": "", Email: "stevy.aguatinus@ypttglobal.com", "User Name OWS": "YPTT.STEVY.AGUSTINUS", Password: "3o4t 6J+9]CA", Batch: "4" },
    { Nama: "Muhammad Soleh Ridwan", "KTP ID": "3209260809890004", "No. HP XL/Axis/Smartfren": "", Email: "muhammad.soleh.ridwan@ypttglobal.com", "User Name OWS": "YPTT.Muhammad.Soleh", Password: "#ERROR!", Batch: "4" },
    { Nama: "Slamet Arifin", "KTP ID": "3308130909890002", "No. HP XL/Axis/Smartfren": "", Email: "slamet.arifin@ypttglobal.com", "User Name OWS": "YPTT.Slamet.Arifin", Password: "WIa~kztZ{32R", Batch: "4" },
    { Nama: "Muhammad Faldi Al Fiqri", "KTP ID": "3171051504030005", "No. HP XL/Axis/Smartfren": "", Email: "muhammad.faldi.alfiqri@ypttglobal.com", "User Name OWS": "YPTT.Muhammad.Faldi", Password: "L_75y-1nc682", Batch: "4" },
    { Nama: "Sudarmono", "KTP ID": "3320143004980002", "No. HP XL/Axis/Smartfren": "", Email: "sudarmono.ext@ypttglobal.com", "User Name OWS": "YPTT.Sudarmono", Password: "=wZ8v0>2mVk", Batch: "4" },
    { Nama: "Mochamad Rofika Salam", "KTP ID": "3320140803950005", "No. HP XL/Axis/Smartfren": "081935351248", Email: "mochamad.rofika.salam.ext@ypttglobal.com", "User Name OWS": "YPTT.Mochamad.Rofika", Password: "\"1-4Z^U6.Wz\"\"g\"", Batch: "4" },
    { Nama: "Eko Supriyanto", "KTP ID": "3320092811870003", "No. HP XL/Axis/Smartfren": "", Email: "eko.supriyanto.ext@ypttglobal.com", "User Name OWS": "YPTT.Eko.Supriyanto", Password: "Ypttcjxls_@123", Batch: "4" },
    { Nama: "Solikul Riyadi", "KTP ID": "3320141605900001", "No. HP XL/Axis/Smartfren": "087764839320", Email: "solikul.riyadi.ext@ypttglobal.com", "User Name OWS": "YPTT.Solikul.Riyadi", Password: "0N[A%BQK8wxf", Batch: "4" },
    { Nama: "Kartiwa", "KTP ID": "3204433090288001", "No. HP XL/Axis/Smartfren": "", Email: "kartiwa.ext@ypttglobal.com", "User Name OWS": "YPTT.Kartiwa", Password: "\"LtmM,bAdPh7[\"", Batch: "4" },
    { Nama: "Nurdiansyah", "KTP ID": "3601301312970002", "No. HP XL/Axis/Smartfren": "083806552178", Email: "nurdiansyah@ypttglobal.com", "User Name OWS": "YPTT.Nurdiansyah", Password: "ma'Z:C$7Sc0^", Batch: "4" },
    { Nama: "AMUS JUMLIN RAHAKBAUW", "KTP ID": "8102031709030001", "No. HP XL/Axis/Smartfren": "", Email: "amus.jumlin.rahakbauw@ypttglobal.com", "User Name OWS": "YPTT.AMUS.JUMLIN", Password: "}6o3\"\"7OLw=jN\"", Batch: "4" },
    { Nama: "RIDWAN SABILILLAH", "KTP ID": "3275022309980010", "No. HP XL/Axis/Smartfren": "085959589192", Email: "ridwan.sabilillah@ypttglobal.com", "User Name OWS": "YPTT.RIDWAN.SABILILLAH", Password: "9V}rL1OE*nJl", Batch: "4" },
    { Nama: "RAMADHAN ABDULAH", "KTP ID": "5306122502950003", "No. HP XL/Axis/Smartfren": "", Email: "ramadhan.abdullah@ypttglobal.com", "User Name OWS": "YPTT.RAMADHAN.ABDULAH", Password: "WSD%6lNp7G1V", Batch: "4" },
    { Nama: "Fajar Sidik Purnama", "KTP ID": "3205412812950004", "No. HP XL/Axis/Smartfren": "087723762323", Email: "fajar.sidik.purnama@ypttglobal.com", "User Name OWS": "YPTT.Fajar.Sidik.Purnama", Password: "\"6Ckl=#\"\"KFc2S\"", Batch: "4" },
    { Nama: "Maulana", "KTP ID": "3275120810000011", "No. HP XL/Axis/Smartfren": "", Email: "maulana2.ext@ypttglobal.com", "User Name OWS": "YPTT.Maulana2", Password: "jXSd\\&~rA.F1", Batch: "4" },
    { Nama: "Nana Rusmana", "KTP ID": "3208212102900002", "No. HP XL/Axis/Smartfren": "", Email: "nana.rusmana.ext@ypttglobal.com", "User Name OWS": "YPTT.Nana.Rusmana", Password: "F76|KgZCw59e", Batch: "4" },
    { Nama: "Setiawan Eko Prakoso", "KTP ID": "3316112003940002", "No. HP XL/Axis/Smartfren": "", Email: "setiawan.eko.ext@ypttglobal.com", "User Name OWS": "YPTT.Setiawan.Eko.Prakoso", Password: "Ypttcjxls_@123", Batch: "4" },
    { Nama: "Susanto", "KTP ID": "3212180912860007", "No. HP XL/Axis/Smartfren": "083822197809", Email: "susanto.ext@ypttglobal.com", "User Name OWS": "YPTT.Susanto", Password: "B64 h7P2_pkb", Batch: "5" },
    { Nama: "Ignatius Anung Djatmiko", "KTP ID": "3374062009720005", "No. HP XL/Axis/Smartfren": "", Email: "ignatius.anung.djatmiko.ext@ypttglobal.com", "User Name OWS": "YPTT.Ignatius.Anung.Djatmiko", Password: "aS{8.T41Xj\\`", Batch: "5" },
    { Nama: "Muhamad Rosid Kusuma", "KTP ID": "3601190708840006", "No. HP XL/Axis/Smartfren": "", Email: "muhamad.rosid.ext@ypttglobal.com", "User Name OWS": "YPTT.Muhamad.Rosid.Kusuma", Password: "X2:9?r^!1alJ", Batch: "5" },
    { Nama: "Sigit Priyambodo", "KTP ID": "3,17506E+15", "No. HP XL/Axis/Smartfren": "", Email: "sigit.priyambodo.ext@ypttglobal.com", "User Name OWS": "YPTT.Sigit.Priyambodo", Password: "Ypttcjxls_@123", Batch: "5" },
    { Nama: "Rahmatsyah", "KTP ID": "1871120603900006", "No. HP XL/Axis/Smartfren": "081937830494", Email: "rahmatsyah.ext@ypttglobal.com", "User Name OWS": "YPTT.Rahmatsyah", Password: "7paDA`c619;~", Batch: "5" },
    { Nama: "FX Sucipto", "KTP ID": "3308081509690005", "No. HP XL/Axis/Smartfren": "", Email: "fx.sucipto@ypttglobal.com", "User Name OWS": "YPTT.FX.Sucipto", Password: "2nvU'RX]bQ5!", Batch: "5" },
    { Nama: "SEPTEDI HENDRIKA", "KTP ID": "3204321209870013", "No. HP XL/Axis/Smartfren": "", Email: "septedi.hendrika@ypttglobal.com", "User Name OWS": "YPTT.SEPTEDI.HENDRIKA", Password: "Ypttcjxls_@123", Batch: "5" },
    { Nama: "Utama Bagus Pratono", "KTP ID": "3174041105840014", "No. HP XL/Axis/Smartfren": "", Email: "utama.bagus.pratono.ext@ypttglobal.com", "User Name OWS": "YPTT.Utama.Bagus.Pratono", Password: "$a1E r0kJ^K%", Batch: "5" },
];

function searchData() {
    // 1. Ambil dan bersihkan input
    const input = document.getElementById('nikInput').value.trim();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Hapus hasil sebelumnya

    if (input.length === 0) {
        resultsContainer.innerHTML = '<p class="initial-message">Masukkan NIK dan tekan tombol **CARI AKUN**.</p>';
        return;
    }

    // Bersihkan istilah pencarian dari spasi atau karakter khusus (untuk match yang lebih fleksibel)
    const searchTerm = input.replace(/\s|-/g, '');

    // 2. Filter data (cari NIK yang sama persis)
    const exactMatch = dataKaryawan.filter(item => item["KTP ID"].trim() === searchTerm);
    
    // 3. Tampilkan hasil
    if (exactMatch.length > 0) {
        exactMatch.forEach(item => {
            const resultCard = document.createElement('div');
            resultCard.className = 'result-card';
            
            // Tampilkan data yang ditemukan
            resultCard.innerHTML = `
                <h3>✅ DATA DITEMUKAN</h3>
                <p><strong>NIK/KTP ID:</strong> ${item["KTP ID"]}</p>
                <p><strong>Nama Karyawan:</strong> ${item.Nama}</p>
                <hr>
                <p><strong>No. HP:</strong> ${item["No. HP XL/Axis/Smartfren"] || 'Tidak Tersedia'}</p>
                <p><strong>Email:</strong> ${item.Email}</p>
                <p><strong>User OWS:</strong> ${item["User Name OWS"]}</p>
                <p><strong>Password:</strong> <span style="color: red; font-weight: bold;">${item.Password}</span></p>
                <p><strong>Batch:</strong> ${item.Batch}</p>
            `;
            resultsContainer.appendChild(resultCard);
        });
    } else {
        // Tampilkan pesan tidak ditemukan
        resultsContainer.innerHTML = `
            <p class="not-found">
                ❌ NIK **${input}** tidak ditemukan dalam database.<br>
                Pastikan NIK yang Anda masukkan sudah benar (16 digit).
            </p>`;
    }

}
