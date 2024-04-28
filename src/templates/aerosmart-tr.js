import React from 'react';
import {graphql} from 'gatsby';
import SEO from '../components/SEO';
import CtaBasic from '../components/CTAbasic';

const AeroTR = props => {
	const post = props.data.markdownRemark;

	return (
		<>
			<SEO
				title={post.frontmatter.title}
				image={post.frontmatter.image}
				description={post.frontmatter.description}
			/>
			<section
				className="bg-half-170 d-table w-100"
				style={{backgroundImage: `url(${post.frontmatter.image})`}}
			>
				<div className="bg-overlay"/>
				<div className="container">
					<div className="row mt-5 justify-content-center">
						<div className="col-lg-12 text-center">
							<div className="AeroTRs-heading title-heading">
								<h2 className="text-white title-dark">
									{' '}
									{post.frontmatter.title}{' '}
								</h2>
								<p className="text-white-50 para-desc mb-0 mx-auto">
									{post.frontmatter.description
										? post.frontmatter.description
										: null}
								</p>
							</div>
						</div>
						{/*end col*/}
					</div>
					{/*end row*/}
				</div>
				{' '}
				{/*end container*/}
			</section>
			<div className="position-relative">
				<div className="shape overflow-hidden text-white">
					<svg
						viewBox="0 0 2880 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			</div>

			<section class="section">
				<div class="container">

					<div class="row">
						<h1>AeroSmartMag</h1>
						<h2>Ana özellikleri:</h2>
						<ul>
							<li>Yüksek hassasiyet</li>
							<li>Çok uygun fiyat ve kullanımı kolay</li>
							<li>Sensör yönlendirmesi ve ısıtma gerekmez</li>
							<li>Çok düşük güç tüketimi</li>
							<li>Dahili yüksek hassasiyetli GNSS alıcısı</li>
						</ul>

						<p><strong>AeroSmartMag</strong>, Overhauser etkisine dayalı, dünyanın en gelişmiş ve taşınabilir manyetometresi olan SmartMag platformunun bir evrimidir. Sensörü hafiflettik, daha hafif bir çerçeve geliştirdik ve pil dahil yalnızca 1,45 kg'lık tamamen monte edilmiş bir
							ağırlığa ulaştık.
							Optimize edilmiş tasarım, özel algoritmalarla birlikte, uçuş sırasında sallanma gürültüsünü ortadan kaldırmayı amaçlar. Overhauser sensörü, uçuştan önce yönlendirme veya ısınma gerektirmez. Tüm bunlar, çok düşük güç tüketimi ile birleştiğinde, AeroSmartMag'i sektördeki
							kullanımı en kolay drone manyetometresi haline getiriyor. Uygun fiyatı AeroSmartMag'i devrim niteliğinde bir ürün olarak konumlandırıyor.</p>

						<p><strong>Kullanımı kolay drone manyetometresi</strong></p>
						<p>AeroSmartMag, son derece kullanıcı dostu bir konsolla donatılmıştır. Ölçüm parametrelerini seçmek için düğmeleri kullanın ve Başlat'a basın. Bundan sonra, 5 saate kadar hiçbir şey yapmanıza gerek yok. Her yeni uçuş için dronenun pillerini değiştirmeniz yeterli. Tüm
							ölçümler dahili microSD karta kaydedilir. Veriler USB üzerinden bir PC'ye veya akıllı telefona indirilir. Uzaktan kumanda, bir OLED ekran (-40 ile +60 derece), arkadan aydınlatmalı bir klavye ile donatılmıştır.</p>

						<p>Katlanabilir manyetometre çerçevesi, nakliye sırasında cihaz boyutunu küçültür ve drone düşerse şoku emer, hasarı azaltır. Çoğunlukla 3D baskılı donanım parçaları kullanıyoruz, bu nedenle herhangi bir parçada olası bir arıza varsa, yakındaki bir yazıcıda basılmak üzere
							size modeller gönderilir.</p>

						<p><strong>Güç kaynağı</strong></p>
						<p>AeroSmartMag, hafif bir pil ile 5 saate kadar sürekli ölçüm yapar. Manyetometreyi baz istasyonu veya GNSS alıcısı olarak kullanmak istiyorsanız, daha güçlü bir pil de bağlayabilirsiniz.</p>

						<p><strong>Veri biçimi</strong></p>
						<p>Kullanıcı, anket sitelerini veya veri toplama günlerini bölmek için proje klasörleri oluşturabilir. Tüm ölçümler bir TXT dosyasına kaydedilir. Her manyetometre dosyası, konsolun seri numarasını ve ölçüm modunun kodunu içerir. Dosyalar UTC tarih ve saat, uçuş numarası,
							ölçülen alan, tahmini hata, sensör seri numarası, enlem ve boylam gibi bilgileri içerir.</p>

						<p>Bir anket sitesinde birden fazla operatör çalışsa bile, her ölçüm için hangi cihazın kullanıldığını belirleyebilirsiniz.</p>

						<p><strong>Metroloji ve gürültü koruması - yüksek doğruluk garantisi</strong></p>
						<p>Her AeroSmartMag, metrolojik olarak test edilir. Rastgele hatanın (gürültü), mutlak doğruluğun ve oryantasyon hatasının standart sapması kontrol edilir. AeroSmartMag, yüksek endüstriyel gürültü seviyesinde, şehir ortamında veya yüksek voltajlı elektrik hatlarının altında
							ölçümler yapabilir.</p>

						<p><strong>Santimetre düzeyinde hassasiyete sahip dahili çok bantlı GNSS alıcısı</strong></p>
						<p>AeroSmartMag, PPK özelliğine sahip dahili GNSS alıcısıyla zaman ve koordinatlar sağlar. AeroSmartMag, GNSS alıcı moduna sahiptir ve jeofizik uygulamalar sırasında mag sensörü bağlı olmadan GNSS tabanı olarak kullanılabilir.</p>

						<p><strong>Güvenilirlik ve garanti</strong></p>
						<p>Ar-Ge uzmanlarımız, jeofizik araştırmalar konusunda geniş deneyime sahiptir. Ekipmanların güvenilir olması ve hizmetin hızlı ve kolay olması gerektiğinin farkındayız. Tüm manyetometrelerimiz için 3 yıl garanti veriyoruz.</p>

						<h2>Önemli "küçük şeyler"</h2>
						<ul>
							<li>Kaportalar, türbülanslı akışı optimize etmek için golf topu şeklindedir.</li>
							<li>Arkadan aydınlatmalı klavye.</li>
							<li>Pil ile 5 saate kadar kesintisiz çalışma.</li>
							<li>Baz istasyonu veya GNSS alıcısı olarak kullanılabilir.</li>
						</ul>

						<h2>Çalışma modu</h2>
						<ul>
							<li>RAW GNSS verilerinin eşzamanlı kaydı ile drone manyetik araştırması.</li>
							<li>Sürekli ölçüm yapan baz istasyonu.</li>
							<li>GNSS alıcı modu.</li>
						</ul>

						<h2>Uygulama alanı</h2>
						<ul>
							<li>Maden arama.</li>
							<li>UXO algılama.</li>
							<li>Bölgesel jeolojik araştırmalar.</li>
							<li>Mühendislik sörveyleri.</li>
							<li>İşlem hattı eşleme.</li>
							<li>Arkeolojik çalışmalar.</li>
							<li>Petrol ve gaz arama.</li>
						</ul>

						<h2>Teslimat seti:</h2>
						<ul>
							<li>SmartMag konsolu.</li>
							<li>Taşınabilir Overhauser sensörü.</li>
							<li>Harici sarmal GNSS anteni.</li>
							<li>USB kablosu.</li>
							<li>LiPo 4S 14.8V 1.3Ah akü (2 adet).</li>
							<li>Askı halatı.</li>
							<li>Ek kaporta kiti.</li>
						</ul>

						<h2>Opsiyonel:</h2>
						<ul>
							<li>DJI Matrice M300 için süspansiyon braketi.</li>
							<li>Müşteri uçağı için süspansiyon braketi.</li>
							<li>Baz istasyonu modu için braketli manyetik olmayan tripod.</li>
						</ul>

						<h2>Özellikler</h2>
						<table className="table">
							<thead>
							<tr>
								<th>Özellik</th>
								<th>Değer</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>
									<p>Tür</p>
								</td>
								<td>
									<p>Overhauser manyetometre</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Sensör sayısı</p>
								</td>
								<td>
									<p>1</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Dinamik aralık</p>
								</td>
								<td>
									<p>20 000 ila 120 000 nT</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Mutlak doğruluk</p>
								</td>
								<td>
									<p>0,1 nT</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Sensör hassasiyeti</p>
								</td>
								<td>
									<p>0,021 nT/√Hz rms</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Çözünürlük</p>
								</td>
								<td>
									<p>0,001 nT</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Gradyan toleransı</p>
								</td>
								<td>
									<p>30.000 nT/m</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Örnek oranlar</p>
								</td>
								<td>
									<p>
										Drone modu: 0,2, 0,25, 0,5, 1 sn Baz istasyonu: 0,2, 0,25, 0,5, 1 sn
										ve 1 sn'lik adımlarla daha uzun
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Sensörlerin kararlılığı</p>
								</td>
								<td>
									<p> > 10 yıl</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>İlave sensörler</p>
								</td>
								<td>
									<p>IMU, pusula, barometre</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Arabirim</p>
								</td>
								<td>
									<p>dahili: USB, RS-232, CAN FD</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>GNSS alıcısı</p>
								</td>
								<td>
									<p>Yerleşik</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>GNSS anteni</p>
								</td>
								<td>
									<p>dış</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>GNSS sinyalleri</p>
								</td>
								<td>
									<p>
										GGPS L1C/A ve L2C; GLONASS L1OF ve L2OF; Galileo E1B/C ve E5b; Beidou B1I ve B2I; QZSS L1C/A, L1S ve L2C. SBA'LAR: WAAS, EGNOS, MSAS, GAGAN, SDCM.
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Bağlayıcı</p>
								</td>
								<td>
									<p>1 × CAN FD / RS232 / 12V, USB, harici GNSS anteni, Overhauser sensörü</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Gösterge</p>
								</td>
								<td>
									<p>160×128, OLED</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Tuş takımı</p>
								</td>
								<td>
									<p>Arkadan aydınlatmalı 6 düğme</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Dahili hafıza</p>
								</td>
								<td>
									<p>32 GB'a kadar (microSD)</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Güç kaynağı</p>
								</td>
								<td>
									<p>11-16.8 VDC</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Çalışma sıcaklığı</p>
								</td>
								<td>
									<p>–40 ila +60 °C</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Pil dahildir</p>
								</td>
								<td>
									<p>LiPo 4S 14.8V 1.3Ah</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Ürün ağırlığı</p>
								</td>
								<td>
									<p>1,45 kg – pil ile tamamen monte edilmiştir</p>
								</td>
							</tr>
							</tbody>
						</table>

					</div>
				</div>

			</section>
			{post.frontmatter.cta ? <CtaBasic/> : null}
		</>
	);
};

export const query = graphql`
    query AeroTR($locale: String!, $title: String!) {
        markdownRemark(
            frontmatter: { title: { eq: $title } }
            fields: { locale: { eq: $locale } }
        ) {
            frontmatter {
                title
                description
                image
                cta
            }
            html
        }
    }
`;

export default AeroTR;
