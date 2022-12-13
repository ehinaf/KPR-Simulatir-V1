jQuery(document).ready(function () {
    //Set Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    //Set Color Input Range
    const range = [ "rangePersenUangMuka", "rangejangkaWaktu"];

    for (var i = 0; i < range.length; i++) {        
        document.getElementById(range[i]).oninput = function() {
            var value = (this.value-this.min+3)/(this.max-this.min+5)*100
            this.style.background = 'linear-gradient(to right, #D3CC45 0%, #D3CC45 ' + value + '%, #fff ' + value + '%, white 100%)'
        }             
    }

    document.getElementById("rangeSukuBungaFix").oninput = function() {
        var value = (this.value-this.min+1)/(this.max-this.min+2)*100
        this.style.background = 'linear-gradient(to right, #D3CC45 0%, #D3CC45 ' + value + '%, #fff ' + value + '%, white 100%)'
    }
    
    document.getElementById("rangeMasaKreditFix").oninput = function() {
        var value = (this.value-this.min+0.5)/(this.max-this.min+1)*100
        this.style.background = 'linear-gradient(to right, #D3CC45 0%, #D3CC45 ' + value + '%, #fff ' + value + '%, white 100%)'
    }
    
    document.getElementById("rangeSukuBunga").oninput = function() {
        var value = (this.value-this.min+0.5)/(this.max-this.min+1)*100
        this.style.background = 'linear-gradient(to right, #D3CC45 0%, #D3CC45 ' + value + '%, #fff ' + value + '%, white 100%)'
    }

    document.getElementById("margin").oninput = function() {
        var value = (this.value-this.min+1)/(this.max-this.min+2)*100
        this.style.background = 'linear-gradient(to right, #D3CC45 0%, #D3CC45 ' + value + '%, #fff ' + value + '%, white 100%)'
    }



    //Aksi Jika Diklik Hitung
    jQuery("#myKpr-form").on('submit', function(event){
        event.preventDefault();
        hargaProperty = jQuery("#hargaProperty").val();

        //Uang Muka
        nominalUangMuka = jQuery("#nominalUangMuka").val();        
        angsuranPertamaCard = jQuery("#angsuranPertamaCard");        
        angsuranPertama = jQuery("#angsuranPertama");        
        
        nominalUangMuka_format = accounting.formatNumber(nominalUangMuka, 0, ".", ",");  
        resultUangMuka = jQuery("#resultUangMuka").text( "Rp " + nominalUangMuka_format);
        
        //Angsuran Pertama Konvensional
        jangkaWaktu = jQuery("#jangkaWaktu").val();
        sukuBungaFix = jQuery("#sukuBungaFix").val();

        pokokPinjaman = hargaProperty / (jangkaWaktu * 12);
        bungaTahun = hargaProperty * (sukuBungaFix / 100);
        bungaBulan = bungaTahun / 12;

        totalAngsuranPertama = pokokPinjaman + bungaBulan;

        angsuranPertama_format = accounting.formatNumber(totalAngsuranPertama, 0, ".", ",");

        angsuranPertama.text(angsuranPertama_format);
        angsuranPertamaCard.text("Rp " + angsuranPertama_format)

        //Angsuran Pertama Syariah
        angsuranPertamaSy = jQuery("#angsuranPertamaSy");  
        angsuranPertamaCardSy = jQuery("#angsuranPertamaCardSy");  

        resultPinjamanPokok = hargaProperty - nominalUangMuka;
        MarginPerBulan = (sukuBungaFix/100)/12;
        totalAngsuranPertamaSy =  resultPinjamanPokok *  MarginPerBulan / ( 1- ((1 + MarginPerBulan)**(-jangkaWaktu*12)) ) 

        formatTotalAngsuranPertamaSy = accounting.formatNumber(Math.round(totalAngsuranPertamaSy), 0, ".", ",") 

        angsuranPertamaSy.text("Rp " + formatTotalAngsuranPertamaSy);
        angsuranPertamaCardSy.text(formatTotalAngsuranPertamaSy);



       
        //Estimasi Biaya Lain
        persenUangMuka = jQuery("#persenUangMuka").val();
        
        estimasiBiayaNon =  (hargaProperty / 100) * 6;
        estimasiBiayaLain = ((100 - persenUangMuka) / 100) * estimasiBiayaNon;
        estimasiBiayaLain_format = accounting.formatNumber(estimasiBiayaLain, 0, ".", ",");        
        jQuery("#estimasiBiayaLain").text("Rp " + estimasiBiayaLain_format);


        //Total Pembiayaan Pertama Konvensional

        totalBiayaPertama = jQuery("#totalBiayaPertama");
        
        resulTotalBiaya = parseInt(nominalUangMuka) + parseInt(totalAngsuranPertama) + parseInt(estimasiBiayaLain);
        totalBiayaPertama_format = accounting.formatNumber(resulTotalBiaya, 0, ".", ",");
        totalBiayaPertama.text("Rp. " + totalBiayaPertama_format);

        //Total Pembiayaan Pertama Syariah
        totalBiayaPertamaSy = jQuery("#totalBiayaPertamaSy");     

        resulTotalBiayaSy = parseInt(nominalUangMuka) + parseInt(Math.round(totalAngsuranPertamaSy)) + parseInt(estimasiBiayaLain);
        totalBiayaPertamaSy_format = accounting.formatNumber(resulTotalBiayaSy, 0, ".", ",");

        totalBiayaPertamaSy.text("Rp " + totalBiayaPertamaSy_format);
        
        //pinjaman Pokok
        pinjamanPokok = jQuery("#pinjamanPokok");
        resultPinjamanPokok = hargaProperty - nominalUangMuka;
        pinjamanPokok_format = accounting.formatNumber(resultPinjamanPokok, 0, ".", ",");

        pinjamanPokok.text("Rp " + pinjamanPokok_format);  
        
        //Total Margin Pinjaman
        TotalMarginPinjaman = jQuery("#totalMarginPinjaman");

        MarginPinjaman = (Math.round(totalAngsuranPertamaSy) * (jangkaWaktu * 12))  - resultPinjamanPokok;
        formatMarginPinjaman = accounting.formatNumber(MarginPinjaman, 0, ".", ",");

        TotalMarginPinjaman.text("Rp " + formatMarginPinjaman);




    });

    // Validasi Uang Muka

    function ValidasiUangMuka(p1, p2) {
        if (jQuery("#persenUangMuka").val() >= 20) {
            jQuery(".validasi-uang-muka").html("<div class='success-message'>Persentase uang muka 20% adalah jumlah minimum yang disarankan</div>")
        }else(
            jQuery(".validasi-uang-muka").html("<div class='warning-message'>Uang muka di bawah 20% akan memerlukan syarat tertentu dari pihak bank</div>")
        
        )
      }

    jQuery("#persenUangMuka").on("input",function(){
        nominalUangMuka = jQuery("#nominalUangMuka");
        hargaProperty = jQuery("#hargaProperty").val();
        
        rangePersenUangMuka = jQuery("#rangePersenUangMuka");
        rangePersenUangMuka.val(jQuery(this).val());
        nominalUangMuka.val((jQuery(this).val() / 100) * hargaProperty );

        ValidasiUangMuka();       
        
    });

    jQuery("#rangePersenUangMuka").on("input",function(){
        rangePersenUangMuka = jQuery("#rangePersenUangMuka").val();
        hargaProperty = jQuery("#hargaProperty").val();        
        persenUangMuka = jQuery("#persenUangMuka");     
        nominalUangMuka = jQuery("#nominalUangMuka");

        persenUangMuka.val(rangePersenUangMuka);        
        nominalUangMuka.val((persenUangMuka.val() / 100) * hargaProperty );

        ValidasiUangMuka();

    });

    jQuery("#hargaProperty").on("input",function(){
        persenUangMuka = jQuery("#persenUangMuka").val();
        nominalUangMuka = jQuery("#nominalUangMuka");


        nominalUangMuka.val((persenUangMuka / 100) * jQuery(this).val() );
    });

    
    // Validasi Jangka Waktu

    jQuery("#jangkaWaktu").on("input",function(){
        
        rangejangkaWaktu = jQuery("#rangejangkaWaktu");

        rangejangkaWaktu.val(jQuery(this).val());
    });

    jQuery("#rangejangkaWaktu").on("input",function(){
            
        jangkaWaktu = jQuery("#jangkaWaktu");

        jangkaWaktu.val(jQuery(this).val())
    });


    // Validasi Suku Bunga Fix

    jQuery("#sukuBungaFix").on("input",function(){
        
        rangeSukuBungaFix = jQuery("#rangeSukuBungaFix");

        rangeSukuBungaFix.val(jQuery(this).val());
    });

    jQuery("#rangeSukuBungaFix").on("input",function(){
            
        sukuBungaFix = jQuery("#sukuBungaFix");

        sukuBungaFix.val(jQuery(this).val())
    });

   

    // Validasi Masa Kredit Fix

    jQuery("#masaKreditFix").on("input",function(){
        
        rangeMasaKreditFix = jQuery("#rangeMasaKreditFix");

        rangeMasaKreditFix.val(jQuery(this).val());
    });

    jQuery("#rangeMasaKreditFix").on("input",function(){
            
        masaKreditFix = jQuery("#masaKreditFix");

        masaKreditFix.val(jQuery(this).val())
    });

    // Validasi Suku Bunga Floating

    jQuery("#sukuBunga").on("input",function(){
        
        rangeSukuBunga = jQuery("#rangeSukuBunga");

        rangeSukuBunga.val(jQuery(this).val());
    });

    jQuery("#rangeSukuBunga").on("input",function(){
            
        sukuBunga = jQuery("#sukuBunga");

        sukuBunga.val(jQuery(this).val())
    });

});
