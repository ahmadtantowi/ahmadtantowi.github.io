import { Fragment } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div
          className="card shadow-md card-sm bg-base-100 overflow-hidden"
          key={index}
        >
          <div className="relative h-48 w-full">
            <div className="absolute inset-0">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-base-900/70 to-transparent" />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="w-full">
                <h2 className="text-white text-lg">
                  {skeleton({
                    widthCls: 'w-32',
                    heightCls: 'h-6',
                    className: 'mb-2',
                  })}
                </h2>
                <div className="text-white/80 text-sm">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-4',
                    className: '',
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }
    return array;
  };

  const handleClick = (e: React.MouseEvent, item: SanitizedExternalProject) => {
    e.preventDefault();
    try {
      if (googleAnalyticId) {
        ga.event('Click External Project', {
          post: item.title,
        });
      }
    } catch (error) {
      console.error(error);
    }
    window?.open(item.link, '_blank');
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => {
      const hasImage = Boolean(item.imageUrl);
      const backgroundStyle: React.CSSProperties = hasImage
        ? {
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        : {};

      return (
        <a
          className="card shadow-md card-sm bg-base-100 overflow-hidden cursor-pointer"
          key={index}
          href={item.link}
          onClick={(e) => handleClick(e, item)}
        >
          <div className="relative h-48 w-full" style={backgroundStyle}>
            {/* dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/50" />
            {/* soft gradient at bottom for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-medium text-lg opacity-95">
                  {item.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <MdOpenInNew className="text-white text-xl opacity-90" />
                </div>
              </div>
              <p className="mt-2 text-white/85 text-sm line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
          {/* If there's no image, provide a small body area to show meta (keeps cards consistent height) */}
          {!hasImage && (
            <div className="p-4">
              <h3 className="font-medium text-base-content">{item.title}</h3>
              <p className="mt-2 text-sm text-base-content/80 line-clamp-3">
                {item.description}
              </p>
            </div>
          )}
        </a>
      );
    });
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <MdOpenInNew className="text-2xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${externalProjects.length} projects`}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderExternalProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
