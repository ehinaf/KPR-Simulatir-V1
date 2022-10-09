jQuery(document).ready(function () {
    
    jQuery("#myKpr-form").on('submit', function(event){
        event.preventDefault();

        //Uang Muka
        nominalUangMuka = jQuery("#nominalUangMuka").val();        
        angsuranPertama = jQuery("#angsuranPertama");        
        
        nominalUangMuka_format = accounting.formatNumber(nominalUangMuka, 0, ".", ",");  
        resultUangMuka = jQuery("#resultUangMuka").text( nominalUangMuka_format);
        
        //Angsuran Pertama
        hargaProperty = jQuery("#hargaProperty").val();
        jangkaWaktu = jQuery("#jangkaWaktu").val();
        sukuBungaFix = jQuery("#sukuBungaFix").val();

        pokokPinjaman = hargaProperty / (jangkaWaktu * 12);
        bungaTahun = hargaProperty * (sukuBungaFix / 100);
        bungaBulan = bungaTahun / 12;

        totalAngsuranPertama = pokokPinjaman + bungaBulan;

        angsuranPertama_format = accounting.formatNumber(totalAngsuranPertama, 0, ".", ",");
        angsuranPertama.text(angsuranPertama_format);

        //Total Pembiayaan Pertama

        estimasiBiayaLain = 24000000;
        totalBiayaPertama = jQuery("#totalBiayaPertama");

        resulTotalBiaya = parseInt(nominalUangMuka) + parseInt(totalAngsuranPertama) + parseInt(estimasiBiayaLain);
        totalBiayaPertama_format = accounting.formatNumber(resulTotalBiaya, 0, ".", ",");

        totalBiayaPertama.text("Rp. " + totalBiayaPertama_format);

        
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
