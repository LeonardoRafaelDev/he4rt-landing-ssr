import Projects from './Projects';

export default function He4rt() {
  return (
    <>
      <img
        src='/images/background-heart.png'
        alt='Imagem com degradê roxo com a logo da He4rt Developers ao fundo desfocada'
        className='absolute top-0 right-0 w-full max-w-[50%]'
      />
      <header
        className='container relative mx-auto flex w-full flex-col items-center justify-between gap-6 px-10 py-24 lg:flex-row lg:py-[196px]'
        id='inicio'
      >
        <div className='flex w-full flex-col lg:w-1/2 lg:max-w-[544px]'>
          <h1 className='text-[36px] font-bold leading-[43px] tracking-[-0.02em] text-[#424141]'>
            Feito pela{' '}
            <span className='text-purple-500 dark:text-purple-700'>
              comunidade{' '}
            </span>
            <br /> para a{' '}
            <span className='text-purple-500 dark:text-purple-700'>
              comunidade
            </span>
          </h1>
          <p className='mt-4 w-full text-[20px] leading-[30px] tracking-[-0.02em] text-gray-750'>
            Aqui é o lugar aonde mentes extraordinárias se encontram com o
            objetivo de alcançar milhares de pessoas com o poder da tecnologia.{' '}
            <span className='font-semibold text-purple-500 dark:text-purple-700'>
              Aqui mais do que participar, você vai contribuir.
            </span>
          </p>
          <div className='mt-3'>
            <a
              rel='noopener noreferrer'
              href='https://discord.com/invite/5kwDQuv'
              target='_blank'
            >
              <button className='rounded-lg border-2 border-purple-500 bg-transparent px-4 py-2 font-bold text-purple-500 transition-all hover:bg-purple-500 hover:text-white dark:border-purple-700 dark:text-purple-700 dark:hover:bg-purple-700 dark:hover:text-gray-998'>
                Seja um membro
              </button>
            </a>
          </div>
        </div>
        <div className='flex w-full flex-col lg:w-1/2'>
          {/* slider */}
          <Projects />
        </div>
      </header>
    </>
  );
}
