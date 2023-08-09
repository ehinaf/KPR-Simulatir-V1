jQuery(document).ready(function () {
  //Set Tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  //Variable Global
  const hargaProperty = jQuery("#hargaProperty").val().replace(/\./g, "");
  const konvensional = document.getElementById("konvensional");

  //Function Formating ke Rupiah
  function FormatingRupiah(props) {
    return accounting.formatNumber(props, 0, ".", ",");
  }

  //Function Validasi Uang Muka
  function ValidasiUangMuka() {
    if (jQuery("#persenUangMuka").val() >= 20) {
      jQuery(".validasi-uang-muka").html(
        "<div class='success-message'>Persentase uang muka 20% adalah jumlah minimum yang disarankan</div>"
      );
    } else jQuery(".validasi-uang-muka").html("<div class='warning-message'>Uang muka di bawah 20% akan memerlukan syarat tertentu dari pihak bank</div>");
  }

  //Function Set Color Input Range
  function SetColorRange(range, a, b) {
    for (var i = 0; i < range.length; i++) {
      document.getElementById(range[i]).oninput = function () {
        var value =
          ((this.value - this.min + a) / (this.max - this.min + b)) * 100;
        this.style.background =
          "linear-gradient(to right, #D3CC45 0%, #D3CC45 " +
          value +
          "%, #fff " +
          value +
          "%, white 100%)";
        return value;
      };
    }
  }

  //Function Set Color Input Range Form Input Text
  function SetColorRangeText(range, that, a, b) {
    document.getElementById(range).oninput = function () {
      var value =
        ((that.value - this.min + a) / (that.max - that.min + b)) * 100;
      that.style.background =
        "linear-gradient(to right, #D3CC45 0%, #D3CC45 " +
        value +
        "%, #fff " +
        value +
        "%, white 100%)";
      return value;
    };
  }

  //Set Color Input Range
  const rangeGeneral = ["rangePersenUangMuka", "rangejangkaWaktu"];
  SetColorRange(rangeGeneral, 1, 2);

  if (konvensional) {
    const rangeKonven = [
      "rangeSukuBungaFix",
      "rangeMasaKreditFix",
      "rangeSukuBunga",
    ];
    SetColorRange(rangeKonven, 0, 0);
  } else {
    const rangeSyariah = ["rangeMargin"];
    SetColorRange(rangeSyariah, 0, 0);
  }

  //Aksi Jika Diklik Hitung
  jQuery("#myKpr-form").on("submit", function (event) {
    event.preventDefault();
    document.getElementById("hasil").scrollIntoView();

    //Uang Muka
    const nominalUangMuka = jQuery("#nominalUangMuka").val().replace(/\./g, "");

    const angsuranPertamaCard = jQuery("#angsuranPertamaCard");
    const angsuranPertama = jQuery("#angsuranPertama");

    const nominalUangMuka_format = FormatingRupiah(nominalUangMuka);
    const resultUangMuka = jQuery("#resultUangMuka").text(
      "Rp " + nominalUangMuka_format
    );

    const jangkaWaktu = jQuery("#jangkaWaktu").val();
    const sukuBungaFix = jQuery("#sukuBungaFix").val();

    //Estimasi Biaya Lain
    const persenUangMuka = jQuery("#persenUangMuka").val();

    const estimasiBiayaNon = (hargaProperty / 100) * 6;
    const estimasiBiayaLain = ((100 - persenUangMuka) / 100) * estimasiBiayaNon;
    const estimasiBiayaLain_format = FormatingRupiah(estimasiBiayaLain);
    jQuery("#estimasiBiayaLain").text("Rp " + estimasiBiayaLain_format);

    if (konvensional) {
      //Angsuran Pertama Konvensional (Kredit Fix)

      const pokokPinjaman = hargaProperty - nominalUangMuka;
      const bungaBulanFix = sukuBungaFix / 12 / 100;
      const pesentase1Fix = (1 + bungaBulanFix) ** (jangkaWaktu * 12);
      const pesentase2Fix = (1 + bungaBulanFix) ** (jangkaWaktu * 12) - 1;
      const jmlhpersen = pesentase1Fix / pesentase2Fix;

      const totalAngsuranPertamaFix =
        pokokPinjaman * bungaBulanFix * jmlhpersen;

      const angsuranPertama_formatFix = FormatingRupiah(
        totalAngsuranPertamaFix
      );

      angsuranPertama.text("Rp " + angsuranPertama_formatFix);
      angsuranPertamaCard.text(angsuranPertama_formatFix);

      //Angsuran Pertama Konvensional (Kredit Floating)

      const angsuranFloating = jQuery("#angsuranFloating");
      const masaKreditFix = jQuery("#masaKreditFix").val();
      const sukuBungaFloat = jQuery("#sukuBungaFloat").val();

      const bungaBulanFloat = sukuBungaFloat / 12 / 100;
      const pesentaseFloat = 1 - (1 + bungaBulanFloat) ** -(jangkaWaktu * 12);
      const jmlhpersenFloat = bungaBulanFloat / pesentaseFloat;

      const totalAngsuranPertamaFloat = pokokPinjaman * jmlhpersenFloat;

      const angsuranPertama_formatFloat = FormatingRupiah(
        totalAngsuranPertamaFloat
      );

      angsuranFloating.text(angsuranPertama_formatFloat);

      //Total Pembiayaan Pertama Konvensional
      const totalBiayaPertama = jQuery("#totalBiayaPertama");
      const resulTotalBiaya =
        parseInt(nominalUangMuka) +
        parseInt(Math.round(totalAngsuranPertamaFix)) +
        parseInt(estimasiBiayaLain);
      const totalBiayaPertama_format = FormatingRupiah(resulTotalBiaya);
      totalBiayaPertama.text("Rp " + totalBiayaPertama_format);

      //pinjaman Pokok
      const pinjamanPokok = jQuery("#pinjamanPokok");
      const resultPinjamanPokok = hargaProperty - nominalUangMuka;
      const pinjamanPokok_format = FormatingRupiah(resultPinjamanPokok);
      pinjamanPokok.text("Rp " + pinjamanPokok_format);

      //Total Bunga Pinjaman Konvensional
      const jangkaKreditFloat = jangkaWaktu - masaKreditFix;
      const estimasiBungaPinjaman = jQuery("#estimasiBungaPinjaman");
      const bungaPinjamanFix =
        Math.round(totalAngsuranPertamaFix) * (masaKreditFix * 12);
      const bungaPinjamanFloat =
        Math.round(totalAngsuranPertamaFloat) * (jangkaKreditFloat * 12);
      const formatBungaPinjaman = FormatingRupiah(
        bungaPinjamanFix + bungaPinjamanFloat - resultPinjamanPokok
      );
      estimasiBungaPinjaman.text("Rp " + formatBungaPinjaman);
    } else {
      //Angsuran Pertama Syariah
      const angsuranPertamaSy = jQuery("#angsuranPertamaSy");
      const angsuranPertamaCardSy = jQuery("#angsuranPertamaCardSy");
      const margin = jQuery("#margin").val();

      const resultPinjamanPokok = hargaProperty - nominalUangMuka;
      const MarginPerBulan = margin / 100 / 12;
      const totalAngsuranPertamaSy =
        (resultPinjamanPokok * MarginPerBulan) /
        (1 - (1 + MarginPerBulan) ** (-jangkaWaktu * 12));

      const formatTotalAngsuranPertamaSy = FormatingRupiah(
        totalAngsuranPertamaSy
      );

      angsuranPertamaSy.text("Rp " + formatTotalAngsuranPertamaSy);
      angsuranPertamaCardSy.text(formatTotalAngsuranPertamaSy);

      //Total Pembiayaan Pertama Syariah
      const totalBiayaPertamaSy = jQuery("#totalBiayaPertamaSy");

      const resulTotalBiayaSy =
        parseInt(nominalUangMuka) +
        parseInt(Math.round(totalAngsuranPertamaSy)) +
        parseInt(estimasiBiayaLain);
      const totalBiayaPertamaSy_format = FormatingRupiah(resulTotalBiayaSy);

      totalBiayaPertamaSy.text("Rp " + totalBiayaPertamaSy_format);

      //pinjaman Pokok
      const pinjamanPokok = jQuery("#pinjamanPokok");
      const pinjamanPokok_format = FormatingRupiah(resultPinjamanPokok);
      pinjamanPokok.text("Rp " + pinjamanPokok_format);

      //Total Margin Pinjaman Syariah
      const TotalMarginPinjaman = jQuery("#totalMarginPinjaman");

      const MarginPinjaman =
        Math.round(totalAngsuranPertamaSy) * (jangkaWaktu * 12) -
        resultPinjamanPokok;
      const formatMarginPinjaman = FormatingRupiah(MarginPinjaman);

      TotalMarginPinjaman.text("Rp " + formatMarginPinjaman);
    }
  });

  // Validasi Persen Uang Muka
  jQuery("#persenUangMuka").on("input", function () {
    const nominalUangMuka = jQuery("#nominalUangMuka");

    const rangePersenUangMuka = jQuery("#rangePersenUangMuka");
    rangePersenUangMuka.val(jQuery(this).val());
    nominalUangMuka.val((jQuery(this).val() / 100) * hargaProperty);

    ValidasiUangMuka();
  });

  // Validasi Range Persen Uang Muka
  jQuery("#rangePersenUangMuka").on("input", function () {
    const rangePersenUangMuka = jQuery("#rangePersenUangMuka").val();

    const persenUangMuka = jQuery("#persenUangMuka");
    const nominalUangMuka = jQuery("#nominalUangMuka");

    persenUangMuka.val(rangePersenUangMuka);
    nominalUangMuka.val((persenUangMuka.val() / 100) * hargaProperty);

    ValidasiUangMuka();
  });

  // Validasi Harga Property
  jQuery("#hargaProperty").on("input", function () {
    const hargaProperty = jQuery(this).val().replace(/\./g, "");
    const persenUangMuka = jQuery("#persenUangMuka").val();
    const nominalUangMuka = jQuery("#nominalUangMuka");

    nominalUangMuka.val((persenUangMuka / 100) * hargaProperty);
  });

  // Validasi Jangka Waktu
  jQuery("#jangkaWaktu").on("input", function () {
    const rangejangkaWaktu = jQuery("#rangejangkaWaktu");
    rangejangkaWaktu.val(jQuery(this).val());
    SetColorRangeText("jangkaWaktu", rangejangkaWaktu[0], 1, 2);
  });

  // Validasi Range Jangka Waktu
  jQuery("#rangejangkaWaktu").on("input", function () {
    const jangkaWaktu = jQuery("#jangkaWaktu");
    jangkaWaktu.val(jQuery(this).val());
  });

  // Validasi Suku Bunga Fix

  jQuery("#sukuBungaFix").on("input", function () {
    const rangeSukuBungaFix = jQuery("#rangeSukuBungaFix");
    rangeSukuBungaFix.val(jQuery(this).val());
    SetColorRangeText("sukuBungaFix", rangeSukuBungaFix[0], 0, 0);
  });

  // Validasi Range Suku Bunga Fix
  jQuery("#rangeSukuBungaFix").on("input", function () {
    const sukuBungaFix = jQuery("#sukuBungaFix");
    sukuBungaFix.val(jQuery(this).val());
  });

  // Validasi Masa Kredit Fix
  jQuery("#masaKreditFix").on("input", function () {
    const rangeMasaKreditFix = jQuery("#rangeMasaKreditFix");
    rangeMasaKreditFix.val(jQuery(this).val());
    SetColorRangeText("masaKreditFix", rangeMasaKreditFix[0], 0, 0);
  });

  // Validasi Range Masa Kredit Fix
  jQuery("#rangeMasaKreditFix").on("input", function () {
    const masaKreditFix = jQuery("#masaKreditFix");
    masaKreditFix.val(jQuery(this).val());
  });

  // Validasi Suku Bunga Floating
  jQuery("#sukuBungaFloat").on("input", function () {
    const rangeSukuBunga = jQuery("#rangeSukuBunga");
    rangeSukuBunga.val(jQuery(this).val());
    SetColorRangeText("sukuBungaFloat", rangeSukuBunga[0], 0, 0);
  });

  // Validasi Range Suku Bunga Floating
  jQuery("#rangeSukuBunga").on("input", function () {
    const sukuBungaFloat = jQuery("#sukuBungaFloat");
    sukuBungaFloat.val(jQuery(this).val());
  });

  // Validasi Margin
  jQuery("#margin").on("input", function () {
    const rangeMargin = jQuery("#rangeMargin");
    rangeMargin.val(jQuery(this).val());
    SetColorRangeText("margin", rangeMargin[0], 0, 0);
  });

  // Validasi Range Margin
  jQuery("#rangeMargin").on("input", function () {
    const margin = jQuery("#margin");
    margin.val(jQuery(this).val());
  });
});
