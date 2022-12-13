<div class="container-fluid">
    <div class="row mt-2">
        <div class="col-md-6 card-form-kpr-syariah">
            <form method="post" accept-charset="utf-8" id="myKpr-form">
                <div class="row">
                    <div class="col-5">
                        <p class="title-form">Harga Property</p>
                    </div>
                    <div class="col-7">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Rp</span>
                            <input type="text" id="hargaProperty" min="1" value="500000000" class="form-control" placeholder="0" data-inputmask="'alias': 'numeric', 'groupSeparator': '', 'autoGroup': true" aria-describedby="basic-addon1">
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-4">
                        <p class="title-form">Uang Muka</p>
                    </div>
                    <div class="col-8">
                        <div class="input-group mb-2">
                            <input type="text" id="persenUangMuka" value="20" class="form-control persen" placeholder="0" aria-label="persen" disabled>
                            <span class="input-group-text">%</span>
                            <span class="input-group-text">Rp</span>
                            <input type="text" id="nominalUangMuka" value="100000000" class="form-control" placeholder="0" aria-label="nominal">
                        </div>
                    </div>
                    <input type="range" id="rangePersenUangMuka" name="rangepersen" min="0" max="50" step="1" value="20">

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
                            <span class="input-group-text" id="basic-addon1">Tahun</span>
                        </div>
                    </div>
                    <input type="range" id="rangejangkaWaktu" min="1" max="30" step="1" value="20">

                    <div class="d-flex justify-content-between indicator-persen">
                        <p>1 tahun</p>
                        <p>30 tahun</p>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-7">
                        <p class="title-form">Margin/tahun</p>
                    </div>
                    <div class="col-5">
                        <div class="input-group mb-2">
                            <input type="number" id="sukuBungaFix" min="1" max="30" step="0.5" value="10" class="form-control" placeholder="0">
                            <span class="input-group-text" id="basic-addon1">%</span>
                        </div>
                    </div>
                    <input type="range" id="margin" min="1" max="15" step="0.5" value="10">

                    <div class="d-flex justify-content-between indicator-persen">
                        <p>1%</p>
                        <p>15%</p>
                    </div>
                </div>

                <div class="d-grid">
                    <button class="btn btn-primary" type="submit">Hitung</button>
                </div>
            </form>
        </div>

        <div class="col p-3">
            <p class="fs-5 fw-semibold title-hasil">Hasil Perhitungan</p>

            <div class="result-kpr">
                <div class="row text-center">
                    <div class="col ">
                        <div class="credit-fix">
                            <div class="judul-credit-fix">
                                Angsuran/bulan
                            </div>
                            <div class="nominal-credit-fix" id="angsuranPertamaCardSy">
                                3.860.087
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
                    <div class="nominal" id="angsuranPertamaSy">Rp 3.860.087</div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="label">Estimasi Biaya Lainnya
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-html="true" data-bs-custom-class="custom-tooltip" data-bs-title="<p class='text-start'>Estimasi biaya-biaya yang harus disiapkan saat melakukan akad KPR. Jumlahnya berkisar 6% dari pokok pinjaman. Jumlah dapat berbeda di setiap bank.</p>
                            <p class='text-start'>Meliputi</p>
                            <ul class='text-start'>
                                <li><span>Biaya Bank:</span>
                                    <ul>
                                        <li>Appraisal</li>
                                        <li>Administrasi</li>
                                        <li>Provisi</li>
                                    </ul>
                                </li>
                                <li><span>Biaya Notaris:</span>
                                    <ul>
                                        <li>Akta Jual Beli</li>
                                        <li>Bea Balik Nama</li>
                                        <li>Akta SKMHT</li>
                                        <li>Akta APHT</li>
                                        <li>Perjanjian HT</li>
                                        <li>Cek Sertifikat ZNT, PNBP HT</li>
                                    </ul>
                                </li>
                                <li><span>Biaya Asuransi:</span>
                                    <ul>
                                        <li>Asuransi Jiwa</li>
                                        <li>Asuransi Kebakaran</li>
                                    </ul>
                                </li>
                            </ul>">
                            <i class="far fa-question-circle" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="nominal" id="estimasiBiayaLain">Rp 24.000.000</div>
                </div>
                <div class="px-2">

                    <div class="d-flex justify-content-between total-biaya-pertama">
                        <div class="label-total">Total Pembiayaan Pertama</div>
                        <div class="nominal-total" id="totalBiayaPertamaSy">Rp 127.860.087</div>
                    </div>
                </div>
            </div>

            <div class="row p-2">
                <p class="title-form fw-bold text-dark border-bottom p-2">Detail Pinjaman</p>

                <div class="d-flex justify-content-between">
                    <div class="label">Pinjaman Pokok
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-html="true" data-bs-custom-class="custom-tooltip" data-bs-title="<p class='text-start'>Jumlah pinjaman total yang dihitung dari Harga Properti - Uang Muka</p>">
                            <i class="far fa-question-circle" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="nominal" id="pinjamanPokok">Rp 400.000.000</div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="label">Total Margin Pinjaman</div>
                    <div class="nominal" id="totalMarginPinjaman">Rp 526.420.880</div>

                </div>
            </div>
        </div>
    </div>
</div>