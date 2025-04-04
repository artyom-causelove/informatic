<script lang="ts" setup>
import type { Name } from './folder.vue';

defineProps<{
    number: number;
    content: string;
    file?: {
        name: Name;
        description: string;
    };
}>()
</script>

<template>
    <div class="task-wrapper">
        <div class="task-number">
            <ud-text font-family="Cinematografica" :font-weight="700" :size="128">
                {{ number }}
            </ud-text>
        </div>

        <div class="task-content" style="margin-top: 26px;">
            <ud-text font-family="UA Brand" :size="24" :line-height="1.4">
                {{ content }}
            </ud-text>
        </div>

        <div class="task-input">
            <work-folder v-if="file" :name="file.name" :description="file.description" :description-style="{ color: 'black' }" />
            <input type="text" placeholder="Ответить">
            <ud-button variant="paper" size="md">
                <ud-text font-family="UA Brand" :font-weight="700" :size="24">
                    Ответить
                </ud-text>
            </ud-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.task-wrapper {
    background: #FFFFFF;
    border-radius: 60px;
    padding: 40px;
    max-width: 1800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
}

.task-number {
    color: #000000;
    margin-right: 55px;
    height: fill-available;
}

.task-content {
    width: 830px;
    color: #000000;

    & p {
        white-space: pre-line;
    }

}

.task-input {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    & input {
        max-width: 357px;
        height: 99px;
        padding: 0 20px;
        font-family: 'UA Brand';
        font-size: 30px;
        outline: none;
        transition: border-color 0.2s ease;

        border: 3px solid #00000080;

        &:focus {
            border-color: #3f3f3f;
        }
    }
}
</style>