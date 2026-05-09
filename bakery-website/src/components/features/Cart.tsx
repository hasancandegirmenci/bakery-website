import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Cart Drawer */}
      <div className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-rose" />
            <h2 className="font-serif text-xl font-bold text-gray-900">Sepetim</h2>
            <span className="px-2 py-1 bg-rose/10 text-rose text-sm font-medium rounded-full">
              {items.length} ürün
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-12 h-12 text-gray-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                Sepetiniz Boş
              </h3>
              <p className="text-gray-500 mb-6">
                Sepetinizde henüz ürün bulunmamaktadır.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-rose hover:bg-rose-dark text-white font-medium rounded-full transition-colors"
              >
                Alışverişe Başla
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-rose font-bold mb-3">
                      ₺{item.product.price}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t bg-cream">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-600">Toplam</span>
              <span className="text-2xl font-bold text-gray-900">
                ₺{totalPrice}
              </span>
            </div>
            <button className="w-full py-4 bg-rose hover:bg-rose-dark text-white font-semibold rounded-xl transition-colors mb-3">
              Siparişi Tamamla
            </button>
            <button
              onClick={clearCart}
              className="w-full py-3 text-gray-500 hover:text-red-500 font-medium transition-colors"
            >
              Sepeti Temizle
            </button>
          </div>
        )}
      </div>
    </>
  );
}
