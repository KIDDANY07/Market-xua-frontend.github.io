import React from 'react';
import Footer from '../components/footer';
import Store from './Store';

const ProfilePage = () => {
  return (
    <div>
      <div className="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
        <div className="relative h-40">
          <img
            className="absolute h-full w-full object-cover"
            src="https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_640.jpg"
            alt="background"
          />
        </div>
        <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile"
          />
        </div>
        <div className="mt-16">
          <h1 className="text-lg text-center font-semibold">User</h1>
          <p className="text-sm text-gray-600 text-center">
            15 años de experiencia en el comercio textil
          </p>
        </div >
        <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t shadow-lg">
          {[
            'Diseño Textil',
            'Moda Sostenible',
            'Tendencias de Estilo',
            'Merchandising Textil',
            'Producción Textil',
          ].map((tag) => (
            <div
              key={tag}
              className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Botones para el CRUD */}
        <div className="mt-6 flex justify-center items-center ">
          <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:text-blue-900 transition duration-200">
            Agregar Producto
          </button>
        </div>
      </div>

      <Store />
      <Footer />
    </div>
  );
};

export default ProfilePage;
