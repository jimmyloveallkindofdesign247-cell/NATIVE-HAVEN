import React from 'react';

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
  variant?: 'navbar' | 'footer' | 'floating';
}

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.908.536 3.693 1.468 5.215L2 22l4.908-1.436a9.97 9.97 0 005.123 1.468c5.535 0 10.031-4.496 10.031-10.032S17.566 2 12.031 2zm0 18.258a8.217 8.217 0 01-4.323-1.22l-.31-.184-2.906.85.854-2.834-.202-.32a8.204 8.204 0 01-1.334-4.54c0-4.545 3.697-8.242 8.242-8.242 4.545 0 8.242 3.697 8.242 8.242 0 4.545-3.697 8.248-8.221 8.248zm4.512-6.177c-.247-.124-1.463-.722-1.69-.805-.227-.082-.392-.124-.557.124-.165.247-.64 1.805-.784.97-.144.165-.289.185-.536.062-.247-.124-1.042-.384-1.986-1.225-.734-.655-1.23-1.464-1.374-1.71-.144-.247-.015-.38.108-.503.111-.111.247-.289.37-.433.124-.144.165-.247.247-.412.082-.165.041-.309-.02-.433-.062-.124-.557-1.34-.763-1.835-.2-.484-.403-.418-.557-.426l-.474-.008c-.165 0-.433.062-.66.309-.227.247-.866.846-.866 2.062s.887 2.392 1.01 2.557c.124.165 1.745 2.664 4.227 3.737.59.255 1.052.408 1.412.522.593.189 1.134.162 1.56.099.475-.071 1.463-.598 1.67-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.289z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.602.103v3.473h-1.815c-1.397 0-1.737.676-1.737 1.758v2.224h3.766l-.504 3.667h-3.262v7.98h-4.908z" />
  </svg>
);

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/nativehavenfashionzone',
    icon: FacebookIcon,
    handle: '@NativeHavenFashion',
    color: 'hover:text-[#1877F2] hover:border-[#1877F2]/40',
    bgColor: 'hover:bg-[#1877F2]/10',
    accentColor: '#1877F2',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/nativehavenfashionzone',
    icon: InstagramIcon,
    handle: '@nativehavenfashionzone',
    color: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
    bgColor: 'hover:bg-[#E4405F]/10',
    accentColor: '#E4405F',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/2348039876543?text=Hello%20NATIVE%20HAVEN%20Fashion%20Zone!%20I%20am%20inaugurating%20an%20inquiry.',
    icon: WhatsAppIcon,
    handle: '+234 803 987 6543',
    color: 'hover:text-[#25D366] hover:border-[#25D366]/40',
    bgColor: 'hover:bg-[#25D366]/10',
    accentColor: '#25D366',
  },
];

export const SocialIconsBar: React.FC<SocialIconsProps> = ({
  className = 'flex items-center gap-3',
  iconClassName = 'w-4 h-4',
  variant = 'navbar',
}) => {
  return (
    <div className={className} aria-label="Official Social Media Links">
      {SOCIAL_LINKS.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit NATIVE HAVEN Fashion Zone on ${social.name}`}
            className={`transition-all duration-300 flex items-center justify-center rounded-full border ${
              variant === 'navbar'
                ? 'w-8 h-8 text-neutral-300 border-neutral-700/60 bg-neutral-900/60 hover:text-[#E05A10] hover:border-[#E05A10] hover:scale-110'
                : 'w-10 h-10 text-neutral-200 border-neutral-700/80 bg-neutral-900 hover:text-white hover:border-[#FF6F00] hover:bg-[#FF6F00]/20 hover:scale-110'
            }`}
          >
            <IconComponent className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
};
