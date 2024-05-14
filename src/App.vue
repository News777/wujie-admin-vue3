<template>
  <div>
    <main-row :size="52" :data="data" :level="1" />
  </div>
</template>

<script setup lang="tsx">
import { useData } from './data.config'

const { data } = useData()

const MainRow = ({ size, data, level }: { size: number; data: any[]; level: number }) => {
  const w = `width: ${size}px;`
  const h = `height: ${size}px;`
  return data.map((mainRow, index) => {
    const isLast = index === data.length - 1
    return (
      <div
        class={[
          'flex flex-row flex-nowrap',
          level === 1 ? 'py-20px' : 'py-20px pb-0',
          !isLast ? 'border border-b-dashed border-[#eaecef]' : ''
        ]}
      >
        <img class="rounded-full" style={[w, h]} src={mainRow.avatar} />
        <div class={['flex flex-col ml-10px w-full']}>
          <div class={['flex', 'flex-col', 'justify-around']} style={[h]}>
            <div class="flex flex-nowrap items-center justify-between">
              <span class="text-[#666666] whitespace-nowrap">{mainRow.name}</span>
              <div class="flex flex-row flex-nowrap items-center">
                <svg-icon name="like" class="cursor-pointer" />
                <span class="px-3px">{mainRow.like}</span>
                <svg-icon class="ml-10px cursor-pointer" name="reply" width="23" height="23" />
              </div>
            </div>
            <span class="text-13px text-[#acacac] whitespace-nowrap">{mainRow.date}</span>
          </div>
          <p class={['py-20px my-0']}>{mainRow.text}</p>
          <div class="pl-10px border border-[#eaecef] border-l-dashed ">
            {mainRow?.children?.length
              ? MainRow({ size: 42, data: mainRow.children, level: level + 1 })
              : ''}
          </div>
        </div>
      </div>
    )
  })
}
</script>

<style scoped></style>
