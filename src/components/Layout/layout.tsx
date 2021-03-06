import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddDoctor from '../../pages/AddDoctor';
import Doctors from '../../pages/Doctors';
import Events from '../../pages/Events';
import CTA from '../CTA';


const navigation = [
  { name: 'Events', href: '/', current: true },
  { name: 'Doctors', href: '/doctors', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout() {


  return (
    <>
      <div className='min-h-full'>
        <Disclosure as='nav' className='bg-white border-b border-gray-200'>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                  <div className='flex'>
                    <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'border-indigo-500 text-gray-900'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='-mr-2 flex items-center sm:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='sm:hidden'>
                <div className='pt-2 pb-3 space-y-1'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className='py-10'>
          <main>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <CTA/>
                <Routes>
                  <Route path='/' element={<Events />} />
                  <Route path='/doctors' element={<Doctors />} />
                  <Route path='/add-doctor' element={<AddDoctor />} />
                  <Route path='/add-event' element={<AddDoctor />} />
                </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
