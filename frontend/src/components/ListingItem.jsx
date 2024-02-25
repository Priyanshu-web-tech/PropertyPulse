import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <Link
      to={`/listing/${listing._id}`}
      className='block w-full sm:w-72 mx-auto mb-6 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow'
    >
      <div className='relative'>
        <img
          src={
            listing.imageUrls[0] ||
            'https://via.placeholder.com/600x400'
          }
          alt='listing cover'
          className='w-full h-48 sm:h-36 object-cover transition-transform duration-300 transform-gpu hover:scale-105'
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity'>
          <h2 className='text-lg font-semibold'>
            {listing.name}
          </h2>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex items-center mb-2 text-gray-600'>
          <MdLocationOn className='h-4 w-4 mr-1 text-green-700' />
          <p className='text-sm'>{listing.address}</p>
        </div>
        <p className='text-sm text-gray-700 line-clamp-3 mb-2'>
          {listing.description}
        </p>
        <p className='text-indigo-600 font-semibold'>
          {listing.offer
            ? `$${listing.discountPrice.toLocaleString('en-US')}${
                listing.type === 'rent' ? ' / month' : ''
              }`
            : `$${listing.regularPrice.toLocaleString('en-US')}`}
        </p>
        <div className='flex justify-between mt-2 text-gray-800 text-sm'>
          <div className='font-bold'>
            {`${listing.bedrooms} ${
              listing.bedrooms > 1 ? 'beds' : 'bed'
            }`}
          </div>
          <div className='font-bold'>
            {`${listing.bathrooms} ${
              listing.bathrooms > 1 ? 'baths' : 'bath'
            }`}
          </div>
        </div>
      </div>
    </Link>
  );
}
