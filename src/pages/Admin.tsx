import React, { useState } from 'react';
import { 
  LogIn, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  Settings, 
  Upload, 
  Edit3, 
  Trash2,
  Eye,
  Plus,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const Admin: React.FC = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const success = await login(loginData.email, loginData.password);
    setIsLoading(false);
    if (!success) {
      alert('بيانات الدخول غير صحيحة');
    }
  };

  const mockProjects = [
    { id: '1', title: 'مجمع الرياض التجاري', category: 'glass', status: 'completed', date: '2024-01-15' },
    { id: '2', title: 'فيلا العائلة الملكية', category: 'aluminum', status: 'in-progress', date: '2024-02-20' },
    { id: '3', title: 'مستشفى الملك فهد', category: 'contracting', status: 'completed', date: '2023-12-10' }
  ];

  const mockMessages = [
    { id: '1', name: 'محمد أحمد', email: 'mohamed@example.com', service: 'glass', date: '2024-01-20', read: false },
    { id: '2', name: 'فاطمة علي', email: 'fatima@example.com', service: 'aluminum', date: '2024-01-19', read: true },
    { id: '3', name: 'عبدالله خالد', email: 'abdullah@example.com', service: 'contracting', date: '2024-01-18', read: false }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="text-center mb-8">
            <LogIn className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('admin.login')}</h1>
            <p className="text-gray-600">ادخل بياناتك للوصول إلى لوحة التحكم</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="admin@tenth-power.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>للاختبار: admin@tenth-power.com / admin123</p>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', name: 'لوحة المعلومات', icon: BarChart3 },
    { id: 'projects', name: 'إدارة المشاريع', icon: FolderOpen },
    { id: 'messages', name: 'رسائل العملاء', icon: MessageSquare },
    { id: 'content', name: 'إدارة المحتوى', icon: Edit3 }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">{t('admin.title')}</h1>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-sm text-gray-600">مرحباً، {user?.email}</span>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-lg p-4">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-amber-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">لوحة المعلومات</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'إجمالي المشاريع', value: '156', change: '+12%', color: 'blue' },
                    { title: 'مشاريع جارية', value: '23', change: '+5%', color: 'yellow' },
                    { title: 'رسائل جديدة', value: '8', change: '+3', color: 'green' },
                    { title: 'زوار اليوم', value: '1,234', change: '+18%', color: 'purple' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full bg-${stat.color}-100 text-${stat.color}-600`}>
                          {stat.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">النشاط الأخير</h3>
                  <div className="space-y-4">
                    {[
                      'تم إضافة مشروع جديد: مجمع الدمام التجاري',
                      'رسالة جديدة من العميل: أحمد محمد',
                      'تم تحديث معرض الأعمال',
                      'تم إنجاز مشروع: فيلا الخبر الراقية'
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">إدارة المشاريع</h2>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-200 flex items-center space-x-2 rtl:space-x-reverse">
                    <Plus className="w-4 h-4" />
                    <span>إضافة مشروع جديد</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المشروع</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">النوع</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">التاريخ</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {mockProjects.map((project) => (
                          <tr key={project.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{project.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                {project.category === 'glass' ? 'زجاج' : 
                                 project.category === 'aluminum' ? 'ألمنيوم' : 'مقاولات'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                project.status === 'completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {project.status === 'completed' ? 'مكتمل' : 'قيد التنفيذ'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {project.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-800">
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">رسائل العملاء</h2>

                <div className="bg-white rounded-xl shadow-lg">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">الرسائل الواردة</h3>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                        {mockMessages.filter(m => !m.read).length} جديدة
                      </span>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {mockMessages.map((message) => (
                      <div key={message.id} className={`p-6 hover:bg-gray-50 transition-colors duration-200 ${!message.read ? 'bg-blue-50' : ''}`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                              <h4 className="font-semibold text-gray-900">{message.name}</h4>
                              {!message.read && (
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{message.email}</p>
                            <p className="text-sm text-gray-500">خدمة: {message.service}</p>
                          </div>
                          <div className="text-sm text-gray-500">{message.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">إدارة المحتوى</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">تحديث معلومات الشركة</h3>
                    <div className="space-y-4">
                      <button className="w-full text-right p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        تعديل صفحة "من نحن"
                      </button>
                      <button className="w-full text-right p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        تحديث معلومات التواصل
                      </button>
                      <button className="w-full text-right p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        إدارة شعار الشركة
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">إدارة الصور</h3>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">اسحب الصور هنا أو انقر للرفع</p>
                      </div>
                      <button className="w-full bg-amber-500 text-white p-3 rounded-lg hover:bg-amber-600 transition-colors duration-200">
                        رفع صور جديدة
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;