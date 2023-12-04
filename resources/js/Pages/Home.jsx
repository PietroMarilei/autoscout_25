import { Link, Head } from '@inertiajs/react';
import Logo from '../components/Logo';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home | AutoScout25" />
            <header className="flex  bg-autoscout-gray p-2">
                <div className='w-44 flex'>
                        <Logo></Logo>
                    </div>
                <nav className="hidden md:flex gap-5 items-center ms-auto me-4">
                    <Link
                        href={route('dashboard')}
                        className="font-semibold text-white hover:text-gray-900 dark:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                        Ricerca
                    </Link>
                    <Link
                        href={route('dashboard')}
                        className="font-semibold text-white hover:text-gray-900 dark:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                        Vendi
                    </Link>
                    <Link
                        href={route('dashboard')}
                        className="font-semibold text-white hover:text-gray-900 dark:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                        Magazine
                    </Link>
                    <Link
                        href={route('dashboard')}
                        className="font-semibold text-white hover:text-gray-900 dark:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                        Auto usate più popolari
                    </Link>
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-white hover:text-gray-900 dark:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            My Autoscout25
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-white hover:text-gray-900 dark:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            {/* <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link> */}
                        </>
                    )}
                </nav>
            </header>

            <main className='bg-slate-300'>
                <div id='search-component' className='max-w-7xl mx-auto p-5'>
                    <div className=' grid grid-cols-3 gap-5'>
                        <select id="brand" name="brand" className='w-full rounded-lg'>
                            <option value="">Marca</option>
                            <option value="">Alfa Romeo</option>
                            <option value="">Audi</option>
                            <option value="">Bmw</option>
                            <option value="">Volkswagen</option>
                        </select>

                        <select id="brand" name="brand" className='w-full rounded-lg'>
                            <option value="">Modello</option>
                            <option value="">Alfa Romeo</option>
                            <option value="">Audi</option>
                            <option value="">Bmw</option>
                            <option value="">Volkswagen</option>
                        </select>

                        <select id="brand" name="brand" className='w-full rounded-lg'>
                            <option value="">Prezzo</option>
                            <option value="">Alfa Romeo</option>
                            <option value="">Audi</option>
                            <option value="">Bmw</option>
                            <option value="">Volkswagen</option>
                        </select>

                        <select id="brand" name="brand" className='w-full rounded-lg'>
                            <option value="">Anno</option>
                            <option value="">Alfa Romeo</option>
                            <option value="">Audi</option>
                            <option value="">Bmw</option>
                            <option value="">Volkswagen</option>
                        </select>

                        <input type="text" className='w-full rounded-lg' placeholder='Città / Cap' />

                        <button className='bg-yellow-300 rounded-lg drop-shadow-2xl'>
                            Risultati
                        </button>

                    </div>
                </div>
            </main>
        </>
    );
}
