<div class="container-sm">
    <h4>Simulasi KPR</h4>
    <div class="row">
        <div class="col-md-5 card-form-kpr">
                <form method="post" accept-charset="utf-8" id="myKpr-form">
                    <div class="row">
                        <div class="col-5">
                            <p class="fs-6">Harga Property</p>
                        </div>
                        <div class="col-7">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Rp</span>
                                <input type="text" id="hargaProperty"  min="1" value="500000000" class="form-control" placeholder="0" data-inputmask="'alias': 'numeric', 'groupSeparator': '', 'autoGroup': true" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <p class="fs-6">Uang Muka</p>
                        </div>
                        <div class="col-8">
                            <div class="input-group mb-2">
                                <input type="text" id="persenUangMuka" value="20" class="form-control persen" placeholder="0" aria-label="persen" >
                                <span class="input-group-text">%</span>
                                <span class="input-group-text">Rp</span>
                                <input type="text" id="nominalUangMuka" value="100000000" class="form-control" placeholder="0" aria-label="nominal"  disabled>
                            </div>
                        </div>
                        <input type="range" id="rangePersenUangMuka" name="rangepersen" min="0" max="50" step="1" value="20">
                        
                        <div class="d-flex justify-content-between indicator-persen" >
                            <p>0%</p>
                            <p>50%</p>
                        </div>
                        
                        <span class="validasi-uang-muka"></span>
                    </div>
                    <div class="row mt-2">
                        <div class="col-7">
                            <p class="fs-6">Jangka Waktu</p>
                        </div>
                        <div class="col-5">
                            <div class="input-group mb-3">
                                <input type="number" id="jangkaWaktu"  min="1" max="30" value="20" class="form-control" placeholder="0">
                                <span class="input-group-text" id="basic-addon1">Tahun</span>
                            </div>
                        </div>
                        <input type="range" id="rangejangkaWaktu" min="1" max="30" step="1" value="20">
                        
                        <div class="d-flex justify-content-between indicator-persen" >
                            <p>1 tahun</p>
                            <p>30 tahun</p>
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col-7">
                            <p class="fs-6">Suku Bunga Fix</p>
                        </div>
                        <div class="col-5">
                            <div class="input-group mb-3">
                                <input type="number" id="sukuBungaFix"  min="1" max="30" step="0.5" value="7.5" class="form-control" placeholder="0">
                                <span class="input-group-text" id="basic-addon1">%</span>
                            </div>
                        </div>
                        <input type="range" id="rangeSukuBungaFix" min="1" max="15" step="0.5" value="7.5">
                        
                        <div class="d-flex justify-content-between indicator-persen" >
                            <p>1%</p>
                            <p>15%</p>
                        </div>
                    </div>
                    
                    <div class="row mt-2">
                        <div class="col-7">
                            <p class="fs-6">Masa Kredit Fix</p>
                        </div>
                        <div class="col-5">
                            <div class="input-group mb-3">
                                <input type="number" id="masaKreditFix"  min="1" max="10" value="5" class="form-control" placeholder="0">
                                <span class="input-group-text" id="basic-addon1">Tahun</span>
                            </div>
                        </div>
                        <input type="range" id="rangeMasaKreditFix" min="1" max="10" step="1" value="5">
                        
                        <div class="d-flex justify-content-between indicator-persen" >
                            <p>1 tahun</p>
                            <p>10 tahun</p>
                        </div>
                    </div>
                    
                    <div class="row mt-2">
                        <div class="col-7">
                            <p class="fs-6">Suku Bunga Floating</p>
                        </div>
                        <div class="col-5">
                            <div class="input-group mb-3">
                                <input type="number" id="sukuBunga"  min="1" max="15" value="12" class="form-control" placeholder="0">
                                <span class="input-group-text" id="basic-addon1">%</span>
                            </div>
                        </div>
                        <input type="range" id="rangeSukuBunga" min="1" max="15" step="1" value="12">
                        
                        <div class="d-flex justify-content-between indicator-persen" >
                            <p>1%</p>
                            <p>15%</p>
                        </div>
                    </div>
                    
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Hitung</button>
                    </div>
                </form>
            </div>
            
        <div class="col-md-7 p-3">
            <p class="fs-5 fw-semibold">Hasil Perhitungan</p>
            
            <div class="result-kpr">
                <div class="row text-center">
                    <div class="col-md-6 ">
                        <div class="credit-fix">
                            <div class="judul-credit-fix">
                                Angsuran/bulan (Masa kredit fix)
                            </div>
                            <div class="nominal-credit-fix">
                                3.222.373
                            </div>    
                        </div>    
                    </div>
                    <div class="col-md-6">
                        <div class="credit-floating">
                            <div class="judul-credit-floating">
                        Angsuran/bulan (Masa kredit floating)
                            </div>
                            <div class="nominal-credit-floating">
                                4.171.885
                            </div>    
                        </div>   
                    </div>
                </div>
            </div>

            <div class="row mt-3 p-2">
                <p class="fs-6 fw-bold text-dark border-bottom p-2">Pembayaran Pertama</p> 
                
                <div class="d-flex justify-content-between">
                    <div class="label">Uang Muka</div>
                    <div class="nominal" id="resultUangMuka">Rp 100.000.000</div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="label">Angsuran Pertama</div>
                    <div class="nominal" id="angsuranPertama">3.222.373</div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="label">Estimasi Biaya Lainnya</div>
                    <div class="nominal" id="estimasiBiayaLain">24.000.000</div>
                </div>
                <div class="px-2">
                    
                    <div class="d-flex justify-content-between total-biaya-pertama">
                        <div class="label-total">Total Pembiayaan Pertama</div>
                        <div class="nominal-total" id="totalBiayaPertama">Rp 127.222.373</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<form method="post" accept-charset="utf-8" id="nadaft-kpr-simulation-form">
    <h1 class="text-center">Simulasi KPR</h1>
    <div class="input-container">
        <div class="input-group">
            <p>Harga Properti</p>
            <input id="kprPrice" class="input-kpr" type="text" min="1" value="195000000" data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true">
        </div>
        <div class="input-group">
            <p>Jangka Waktu (Tahun)</p>
            <input id="kprDuration" class="input-kpr" type="number" min="1" value="10">
        </div>
        <div class="input-group">
            <p>Bunga (%)</p>
            <input id="kprInterest" class="input-kpr" type="number" step="any" min="1" value="8.0">
        </div>
        <div class="input-group">
            <button class="btn btn-kpr" type="submit">Hitung</button>
        </div>
        <div class="show-installment">
            <p>Angsuran per Bulan</p>
            <h6 id="kprInstallment" class="kpr-installment">Rp. 0</h6>
        </div>
    </div>
</form>