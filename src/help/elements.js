import Content from '@/components/ui/Content.vue'
import Preview from '@/components/ui/Preview.vue'
import Title from '@/components/ui/Title.vue'
import TitleBig from '@/components/ui/TitleBig.vue'

const elements = {
  id_1: {
    title: 'Заголовок',
    component: TitleBig,
  },
  id_2: {
    title: 'Подзаголовок',
    component: Title,
  },
  id_3: {
    title: 'Изображение (url)',
    component: Preview,
  },
  id_4: {
    title: 'Текстовый блок',
    component: Content,
  },
}

export default elements
