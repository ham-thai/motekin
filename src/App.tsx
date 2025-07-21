import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Star, 
  CheckCircle, 
  User, 
  Calendar, 
  MapPin, 
  Phone,
  Mail,
  Instagram,
  Target,
  TrendingUp,
  Award,
  Users,
  Clock,
  Dumbbell,
  Heart,
  Shield,
  ChevronDown,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left"
    >
      <span className="font-semibold text-lg text-gray-800">{question}</span>
      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
    </button>
    {isOpen && (
      <div className="mt-3 text-gray-600 leading-relaxed">
        {answer}
      </div>
    )}
  </div>
);

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMobileMenu(false);
    }
  };

  const faqData = [
    {
      question: "本当に続けられますか？",
      answer: "97%のお客様が3ヶ月間継続されています。専任トレーナーによる徹底サポートと、モチベーション維持プログラムで確実にゴールまで導きます。"
    },
    {
      question: "どのくらいで効果が出ますか？",
      answer: "個人差はありますが、2週間目から体の変化を実感し始め、1ヶ月目で周りから気づかれるレベルの変化が期待できます。3ヶ月で平均+6kgの筋量アップを実現しています。"
    },
    {
      question: "食事制限はありますか？",
      answer: "極端な食事制限は一切ありません。バルクアップに特化した栄養指導で、しっかり食べながら理想の体を作ります。むしろ今より多く食べる方が多いです。"
    },
    {
      question: "返金保証はありますか？",
      answer: "30日間の全額返金保証があります。効果に満足いただけなかった場合、理由を問わず全額返金いたします。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-[#D72631]" />
              <h1 className="text-2xl font-bold text-gray-800">モテキン</h1>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#D72631] transition-colors">
                特徴
              </button>
              <button onClick={() => scrollToSection('results')} className="text-gray-700 hover:text-[#D72631] transition-colors">
                実績
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-[#D72631] transition-colors">
                プログラム
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-[#D72631] transition-colors">
                料金
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-[#D72631] transition-colors">
                FAQ
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {showMobileMenu && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 hover:text-[#D72631] transition-colors">
                  特徴
                </button>
                <button onClick={() => scrollToSection('results')} className="text-left text-gray-700 hover:text-[#D72631] transition-colors">
                  実績
                </button>
                <button onClick={() => scrollToSection('programs')} className="text-left text-gray-700 hover:text-[#D72631] transition-colors">
                  プログラム
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 hover:text-[#D72631] transition-colors">
                  料金
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-[#D72631] transition-colors">
                  FAQ
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen bg-gradient-to-br from-[#D72631] to-[#F46036] text-white relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-[#D72631]/70"></div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              モテる筋肉で<br />人生が変わる。
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              横浜駅徒歩5分
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">科学的バルクアップ理論×恋愛成功サポート</p>
              <p className="text-white/90">3ヶ月で平均+6kgの筋量アップ実績</p>
            </div>
            <button className="bg-white text-[#D72631] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              今すぐ無料カウンセリングを予約する
              <ChevronRight className="inline w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              なぜモテキンが選ばれるのか
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              97%が友人に推薦する、男性のための本格バルクアップジム
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Target className="w-16 h-16 text-[#D72631] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">男性専門特化</h3>
              <p className="text-gray-600">
                20代後半〜40代男性の体質に特化したプログラム。一般的なジムでは得られない専門的なアプローチ
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <TrendingUp className="w-16 h-16 text-[#D72631] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">科学的メソッド</h3>
              <p className="text-gray-600">
                最新のスポーツ科学に基づいた効率的なバルクアップ。無駄な時間を省き、最短で結果を出す
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Heart className="w-16 h-16 text-[#D72631] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">恋愛成功サポート</h3>
              <p className="text-gray-600">
                筋肉だけでなく、自信とコミュニケーション力もアップ。モテる男性になるための総合サポート
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              実際の変化をご覧ください
            </h2>
            <p className="text-xl text-gray-600">
              3ヶ月で人生が変わった男性たち
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <img 
                    src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400" 
                    alt="Before" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="mt-2 font-semibold text-gray-700">BEFORE</p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=400" 
                    alt="After" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="mt-2 font-semibold text-[#D72631]">AFTER</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#D72631] mb-2">+8kg筋量アップ</p>
                <p className="text-gray-600">田中さん (35歳・会社員)</p>
                <p className="text-sm text-gray-500 mt-2">
                  「3ヶ月で体型が変わり、自信も付きました。彼女もできて人生が変わりました」
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <img 
                    src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=400&h=400" 
                    alt="Before" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="mt-2 font-semibold text-gray-700">BEFORE</p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400&h=400" 
                    alt="After" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="mt-2 font-semibold text-[#D72631]">AFTER</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#D72631] mb-2">+6kg筋量アップ</p>
                <p className="text-gray-600">佐藤さん (29歳・IT関係)</p>
                <p className="text-sm text-gray-500 mt-2">
                  「友人から『別人みたい』と言われました。仕事でも自信を持てるようになりました」
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D72631] mb-2">97%</div>
                <div className="text-gray-600">友人推薦率</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D72631] mb-2">+6kg</div>
                <div className="text-gray-600">平均筋量アップ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D72631] mb-2">3ヶ月</div>
                <div className="text-gray-600">変化実感期間</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D72631] mb-2">100%</div>
                <div className="text-gray-600">継続率</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              モテキンの専用プログラム
            </h2>
            <p className="text-xl text-gray-600">
              自信と魅力を両立する専用プログラム
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Dumbbell className="w-12 h-12 text-[#D72631] mb-4" />
              <h3 className="text-2xl font-bold mb-4">パーソナルトレーニング</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  週2回のマンツーマン指導
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  個人の体質に合わせたオーダーメイドメニュー
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  最新機器による体組成分析
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  フォーム指導と怪我予防
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-[#D72631] mb-4" />
              <h3 className="text-2xl font-bold mb-4">栄養コンサルティング</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  バルクアップ特化の食事指導
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  サプリメント選定サポート
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  24時間LINEサポート
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  外食時のメニュー選び指導
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-[#D72631] mb-4" />
              <h3 className="text-2xl font-bold mb-4">メンタルサポート</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  自信向上のマインドセット指導
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  コミュニケーション力アップ
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  継続のためのモチベーション管理
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  定期的な進捗カウンセリング
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-[#D72631] mb-4" />
              <h3 className="text-2xl font-bold mb-4">アフターサポート</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  卒業後3ヶ月間の無料サポート
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  リバウンド防止プログラム
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  会員限定イベント参加権
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  永続的なコミュニティ参加
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              経験豊富なトレーナー陣
            </h2>
            <p className="text-xl text-gray-600">
              男性専門の資格を持つプロフェッショナル
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <img 
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400&h=400" 
                alt="山田コーチ" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">山田 太郎</h3>
              <p className="text-gray-600 mb-4">ヘッドトレーナー</p>
              <div className="flex justify-center space-x-4 mb-4">
                <Award className="w-6 h-6 text-[#D72631]" />
                <Award className="w-6 h-6 text-[#D72631]" />
                <Award className="w-6 h-6 text-[#D72631]" />
              </div>
              <p className="text-sm text-gray-600">
                NSCA-CPT、JATI-ATI資格保持。10年以上の指導歴で1000人以上の男性をサポート
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <img 
                src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=400&h=400" 
                alt="佐藤コーチ" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">佐藤 健</h3>
              <p className="text-gray-600 mb-4">シニアトレーナー</p>
              <div className="flex justify-center space-x-4 mb-4">
                <Award className="w-6 h-6 text-[#D72631]" />
                <Award className="w-6 h-6 text-[#D72631]" />
                <Award className="w-6 h-6 text-[#D72631]" />
              </div>
              <p className="text-sm text-gray-600">
                元ボディビルダー、栄養士資格保持。科学的アプローチで効率的なバルクアップを実現
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              料金プラン
            </h2>
            <p className="text-xl text-gray-600">
              今だけ30%OFFキャンペーン実施中
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">ベーシック</h3>
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through">298,000円</div>
                <div className="text-4xl font-bold text-[#D72631]">208,600円</div>
                <div className="text-sm text-gray-600">3ヶ月コース</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  週2回のパーソナルトレーニング
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  食事指導
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  LINEサポート
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  体組成分析
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                プラン詳細を見る
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-[#D72631] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D72631] text-white px-4 py-2 rounded-full text-sm font-semibold">
                人気No.1
              </div>
              <h3 className="text-2xl font-bold mb-4">プレミアム</h3>
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through">398,000円</div>
                <div className="text-4xl font-bold text-[#D72631]">278,600円</div>
                <div className="text-sm text-gray-600">3ヶ月コース</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  週3回のパーソナルトレーニング
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  専属栄養士による食事指導
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  24時間LINEサポート
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  サプリメント支給
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  メンタルサポート
                </li>
              </ul>
              <button className="w-full bg-[#D72631] text-white py-3 rounded-lg font-semibold hover:bg-[#b51e2a] transition-colors">
                このプランで申し込む
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">VIP</h3>
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through">598,000円</div>
                <div className="text-4xl font-bold text-[#D72631]">418,600円</div>
                <div className="text-sm text-gray-600">3ヶ月コース</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  完全マンツーマン指導
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  個人専用トレーニングルーム
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  プロテイン・サプリ完全支給
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  恋愛コンサルティング
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  6ヶ月間アフターサポート
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                プラン詳細を見る
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-[#D72631]" />
              <span className="text-lg font-semibold">30日間全額返金保証</span>
            </div>
            <p className="text-gray-600">
              効果に満足いただけない場合、30日以内であれば理由を問わず全額返金いたします
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              お客様からよくいただく質問にお答えします
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#E85A6B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐあなたの人生を変えよう
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            無料カウンセリングで、あなたの理想の体と人生設計を一緒に考えます。
            横浜駅から徒歩5分、完全予約制のプライベート空間でお待ちしています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#D72631] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              無料カウンセリング予約
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#E85A6B] transition-colors">
              30%OFFで体験トレーニング
            </button>
          </div>
          <p className="mt-8 text-white/80">
            ※カウンセリングは完全無料です。無理な勧誘は一切いたしません。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="w-8 h-8 text-[#D72631]" />
                <h3 className="text-xl font-bold">モテキン</h3>
              </div>
              <p className="text-gray-400">
                横浜バルクアップ特化型<br />
                パーソナルジム
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">アクセス</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>横浜駅西口徒歩5分</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>平日 7:00-23:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>土日 9:00-20:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>045-123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@motekin.jp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>@motekin_yokohama</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">営業時間</h4>
              <div className="space-y-2 text-gray-400">
                <div>月-金：7:00-23:00</div>
                <div>土日：9:00-20:00</div>
                <div>祝日：10:00-18:00</div>
                <div className="text-red-400">年中無休</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 モテキン. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <div className={`fixed bottom-4 right-4 z-50 transition-transform duration-300 ${scrollY > 100 ? 'translate-y-0' : 'translate-y-20'}`}>
        <button className="bg-[#D72631] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#b51e2a] transition-colors font-semibold">
          無料相談予約
        </button>
      </div>
    </div>
  );
}

export default App;