import { Leaf } from 'lucide-react'
import { Logo } from './Logo'
import { Newsletter } from './Newsletter'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-neutral-700 py-16 px-4 border-t border-brand-800">
      <div className="max-w-6xl mx-auto">
        <Newsletter />

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Logo size={36} textColor="text-neutral-900" />
            <p className="text-sm mt-4 leading-relaxed text-neutral-700">
              El motor de los restoranes en Chile y LatAm.
            </p>
          </div>
          <div>
            <h4 className="text-neutral-900 font-semibold mb-4 text-xs uppercase tracking-[0.16em]">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/productos" className="hover:text-neutral-900 transition">Todos los productos</a></li>
              <li><a href="/#faq" className="hover:text-neutral-900 transition">FAQ</a></li>
              <li><a href="mailto:hola@eatcorp.cl" className="hover:text-neutral-900 transition">Contacto</a></li>
              <li><a href="https://app.eatcorp.cl" className="hover:text-neutral-900 transition">Iniciar sesión</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-900 font-semibold mb-4 text-xs uppercase tracking-[0.16em]">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacidad" className="hover:text-neutral-900 transition">Privacidad</a></li>
              <li><a href="/terminos" className="hover:text-neutral-900 transition">Términos</a></li>
              <li><a href="/procesamiento-datos" className="hover:text-neutral-900 transition">Procesamiento de datos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
          <p className="flex items-center gap-1.5">
            &copy; {currentYear} EatCorp. Hecho con <Leaf size={13} className="text-primary-400" /> para LatAm.
          </p>
          <div className="flex gap-6">
            <a href="https://app.eatcorp.cl" className="hover:text-neutral-900 transition">app.eatcorp.cl ↗</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
