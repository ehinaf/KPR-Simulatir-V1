<div class="container-fluid">
    <div class="row mt-2">
        <div class="card-form-kpr" id="konvensional">
            <form method="post" accept-charset="utf-8" id="myKpr-form">
                <div class="row">
                    <div class="col-5">
                        <p class="title-form">Harga Property</p>
                    </div>
                    <div class="col-7">
                        <div class="input-group mb-3">
                            <span class="input-group-text-custom" id="basic-addon1">Rp</span>
                            <input type="text" id="hargaProperty" min="1" value="500000000" class="form-control" placeholder="0" data-inputmask="'alias': 'numeric', 'groupSeparator': '.', 'radixPoint': ',', 'autoGroup': true">
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-4 col-custom-left">
                        <p class="title-form">Uang Muka</p>
                    </div>
                    <div class="col-8 col-custom-right">
                        <div class="input-group mb-2">
                            <input type="text" id="persenUangMuka" value="20" class="form-control persen" placeholder="0" aria-label="persen" disabled>
                            <span class="input-group-text-custom">%</span>
                            <span class="input-group-text-custom">Rp</span>
                            <input type="text" id="nominalUangMuka" value="100000000" class="form-control" placeholder="0" aria-label="nominal" data-inputmask="'alias': 'numeric', 'groupSeparator': '.', 'radixPoint': ',', 'autoGroup': true">
                        </div>
                    </div>
                    <div class="col-12">
                        <input type="range" id="rangePersenUangMuka" name="rangepersen" min="0" max="50" step="1" value="20">
                    </div>

                    <div class="d-flex justify-content-between indicator-persen">
                        <p>0%</p>
                        <p>50%</p>
                    </div>

                    <span class="validasi-uang-muka"></span>
                </div>
                <div class="row mt-2">
                    <div class="col-7">
                        <p class="title-form">Jangka Waktu</p>
                    </div>
                    <div class="col-5">
                        <div class="input-group mb-2">
                            <input type="number" id="jangkaWaktu" min="1" max="30" value="20" class="form-control" placeholder="0">
                            <span class="input-group-text-custom" id="basic-addon1">Tahun</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <input type="range" id="rangejangkaWaktu" min="1" max="30" step="1" value="20">
                    </div>

                    <div class="d-flex justify-content-between indicator-persen">
                        <p>1 tahun</p>
                        <p>30 tahun</p>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-7">
                        <p class="title-form">Suku Bunga Fix</p>
                    </div>
                    <div class="col-5">
                        <div class="input-group mb-2">
                            <input type="number" id="sukuBungaFix" min="1" max="30" step="0.5" value="7.5" class="form-control" placeholder="0">
                            <span class="input-group-text-custom" id="basic-addon1">%</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <input type="range" id="rangeSukuBungaFix" min="1" max="15" step="0.5" value="7.5">
                    </div>

                    <div class="d-flex justify-content-between indicator-persen">
                        <p>1%</p>
                        <p>15%</p>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-7">
                        <p class="title-form">Masa Kredit Fix</p>
                    </div>
                    <div class="col-5">
                        <div class="input-group mb-2">
                            <input type="number" id="masaKreditFix" min="1" max="10" value="5" class="form-control" placeholder="0">
                            <span class="input-group-text-custom" id="basic-addon1">Tahun</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <input type="range" id="rangeMasaKreditFix" min="1" max="10" step="1" value="5">
                    </div>

                    <div class="d-flex justify-content-between indicator-persen">
                        <p>1 tahun</p>
                        <p>10 tahun</p>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-7">
                        <p class="title-form">Suku Bunga Floating</p>
                    </div>
                    <div class="col-5">
                        <div class="input-group mb-2">
                            <input type="number" id="sukuBungaFloat" min="1" max="15" step="0.5" value="12" class="form-control" placeholder="0">
                            <span class="input-group-text-custom" id="basic-addon1">%</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <input type="range" id="rangeSukuBunga" min="1" max="15" step="0.5" value="12">
                    </div>

                    <div class="d-flex justify-content-between indicator-persen">
                        <p>1%</p>
                        <p>15%</p>
                    </div>
                </div>

                <div class="d-grid">
                    <button class=" btn-hitung" type="submit">Hitung</button>
                </div>
            </form>
        </div>

        <div class="col p-3 hasil" id="hasil">
            <p class="fs-5 fw-semibold title-hasil">Hasil Perhitungan</p>

            <div class="result-kpr">
                <div class="row text-center">
                    <div class="col-md-6 ">
                        <div class="credit-fix">
                            <div class="judul-credit-fix">
                                Angsuran/bulan (Masa kredit fix)
                            </div>
                            <div class="nominal-credit-fix" id="angsuranPertamaCard">
                                3.222.373
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="credit-floating">
                            <div class="judul-credit-floating">
                                Angsuran/bulan (Masa kredit floating)
                            </div>
                            <div class="nominal-credit-floating" id="angsuranFloating">
                                4.404.345
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3 p-2">
                <p class="title-form fw-bold text-dark border-bottom p-2">Pembayaran Pertama</p>

                <div class="d-flex justify-content-between">
                    <div class="label">Uang Muka</div>
                    <div class="nominal" id="resultUangMuka">Rp 100.000.000</div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="label">Angsuran Pertama</div>
                    <div class="nominal" id="angsuranPertama">Rp 3.222.373</div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="label">Estimasi Biaya Lainnya
                        <div class="tooltips1">
                            <i class="far fa-question-circle" aria-hidden="true"></i>
                            <span class="tooltipstext1">
                                <p>Estimasi biaya-biaya yang harus disiapkan saat melakukan akad KPR. Jumlahnya berkisar 6% dari pokok pinjaman. Jumlah dapat berbeda di setiap bank.</p>
                                Meliputi
                                <ul>
                                    <li class="disc"><span>Biaya Bank:</span>
                                        <ul>
                                            <li class="circle">Appraisal</li>
                                            <li class="circle">Administrasi</li>
                                            <li class="circle">Provisi</li>
                                        </ul>
                                    </li>
                                    <li class="disc"><span>Biaya Notaris:</span>
                                        <ul>
                                            <li class="circle">Akta Jual Beli</li>
                                            <li class="circle">Bea Balik Nama</li>
                                            <li class="circle">Akta SKMHT</li>
                                            <li class="circle">Akta APHT</li>
                                            <li class="circle">Perjanjian HT</li>
                                            <li class="circle">Cek Sertifikat ZNT, PNBP HT</li>
                                        </ul>
                                    </li>
                                    <li class="disc"><span>Biaya Asuransi:</span>
                                        <ul>
                                            <li class="circle">Asuransi Jiwa</li>
                                            <li class="circle">Asuransi Kebakaran</li>
                                        </ul>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>

                    <div class="nominal" id="estimasiBiayaLain">Rp 24.000.000</div>
                </div>
                <div class="px-2">

                    <div class="d-flex justify-content-between total-biaya-pertama">
                        <div class="label-total">Total Pembiayaan Pertama</div>
                        <div class="nominal-total" id="totalBiayaPertama">Rp 127.222.373</div>
                    </div>
                </div>
            </div>

            <div class="row p-2">
                <p class="title-form fw-bold text-dark border-bottom p-2">Detail Pinjaman</p>

                <div class="d-flex justify-content-between">
                    <div class="label">Pinjaman Pokok
                        <div class="tooltips2">
                            <i class="far fa-question-circle" aria-hidden="true"></i>
                            <span class="tooltipstext2">Jumlah pinjaman total yang dihitung dari Harga Properti - Uang Muka</span>
                        </div>
                    </div>
                    <div class="nominal" id="pinjamanPokok">Rp 400.000.000</div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="label">Estimasi Bunga Pinjaman</div>
                    <div class="nominal" id="estimasiBungaPinjaman">Rp 586.124.480</div>
                </div>
            </div>
        </div>
    </div>
</div>